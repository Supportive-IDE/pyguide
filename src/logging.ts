import { ExtensionContext, workspace, env, ConfigurationChangeEvent, window, TextDocument, TextDocumentContentChangeEvent, ConfigurationTarget } from 'vscode';
import axios from 'axios';
import { v4 as uuidV4 } from 'uuid';
import { EXTENSION_ID, EventTypes, FEEDBACK_RECEIVED_FOR, PRIVACY, RESEARCH_PROMPT_SENT, UNREGISTERED, createCommand } from './utils';
import { API_URL } from './urls';
import { Feedback, Misconception, SideLibResult } from './types';


/**
 * States for individual events
 */
enum Status {
    ready = 0,
    inProgress = 1,
    complete = 2
}


/**
 * Reflects the client registration with the database
 */
enum RegistrationStatus {
    idPending = 0,
    idReceived = 1,
    idRefused = 2
}

//#region Events
abstract class AbstractEvent {
    private eventID: string;
    private logStatus: Status;

    constructor(eventID: string) {
        this.eventID = eventID;
        this.logStatus = Status.ready;
    }

    getEventID() {
        return this.eventID;
    }

    getLogStatus() {
        return this.logStatus;
    }

    setSaveInProgress() {
        this.logStatus = Status.inProgress;
    }

    setSaveComplete() {
        this.logStatus = Status.complete;
    }

    setSaveFailed() {
        this.logStatus = Status.ready;
    }

    abstract toLogFormat(clientID: string, sessionID: string): {[key: string]: string};

}


/**
 * Describes an interaction event e.g. open, edit, close, action
 */
class InteractionEvent extends AbstractEvent {
    private eventType: EventTypes;
    private insertText: string = "";
    private deleteText: string = "";
    private fullText: string;
    private editLocation: number;
    private timeStamp: number;

    constructor(eventID: number, eventType: EventTypes, beforeTextRaw: string, afterTextRaw: string, 
        changes: readonly TextDocumentContentChangeEvent[], 
        time: number
    ) {
        super(eventID.toString());
        this.eventType = eventType;
        this.timeStamp = time;
        this.fullText = afterTextRaw;
        if (eventType === EventTypes.open) {
            this.insertText = this.fullText;
            this.editLocation = 0;
        } else if (eventType === EventTypes.save || eventType === EventTypes.close || eventType === EventTypes.action) {
            this.editLocation = 0;
        }
        else {
            this.deleteText = beforeTextRaw.substring(changes[0].rangeOffset, changes[0].rangeOffset + changes[0].rangeLength);
            this.insertText = afterTextRaw.substring(changes[0].rangeOffset, changes[0].rangeOffset + changes[0].text.length);
            if (this.insertText.length > 0) {
                env.clipboard.readText().then(t => {
                    if (t === changes[0].text) { 
                        this.eventType = EventTypes.paste;
                    }
                });
            } else if (this.deleteText.length > 0) {
                env.clipboard.readText().then(t => {
                    if (t === beforeTextRaw.substring(changes[0].rangeOffset, changes[0].rangeOffset + changes[0].rangeLength)) { // Needs refactor
                        this.eventType = EventTypes.cut;
                    }
                });
            }
            this.editLocation = changes[0].rangeOffset;
        }
    }

    //#region getters
    public getEventType() {
        return this.eventType;
    }

    public getInsertText() {
        return this.insertText;
    }

    public getDeleteText() {
        return this.deleteText;
    }

    public getFullText() {
        return this.fullText;
    }

    public getEditLocation() {
        return this.editLocation;
    }

    public getTimestamp() {
        return this.timeStamp;
    }
    //#endregion

    /**
     * Creates a JSON object describing the interaction event to send to the database
     * @param clientID The client ID
     * @param sessionID The file ID
     * @returns A JSON object describing the interaction event
     */
    public toLogFormat(clientID: string, sessionID: string): {} {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            eventType: this.getEventType(),
            insertSize: this.getInsertText().length,
            deleteSize: this.getDeleteText().length,
            editLocation: this.getEditLocation(),
            timestamp: this.getTimestamp(),
        };
    }
}


/**
 * Describes a Misconception
 */
class MisconceptionEvent extends AbstractEvent {
    private misconceptionName: string;
    private rawInfo: Misconception | {};

    constructor(eventID: number, misconceptionName: string, rawInfo: Misconception | {}) {
        super(`${eventID}-${misconceptionName}`);
        this.misconceptionName = misconceptionName;
        this.rawInfo = rawInfo;
    }

    getMisconceptionName() {
        return this.misconceptionName;
    }

    getRawInfo() {
        return this.rawInfo;
    }

    toLogFormat(clientID: string, sessionID: string): {} {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            misconceptionName: this.getMisconceptionName(),
            rawInfo: this.getRawInfo()
        };
    }

}

/**
 * Describes a Feedback object returned by SIDE-lib
 */
class FeedbackEvent extends AbstractEvent {
    private misconceptionName: string;
    private docIndex: number;
    private affectedText: string;
    private firstMessage: string;
    private extendedFeedbackParams: string;

    constructor (eventID: number, misconceptionName: string, docIndex: number, affectedText: string, firstMessage: string, extendedFeedbackParams: string) {
        super(`${eventID}-${misconceptionName}-${docIndex}`);
        this.misconceptionName = misconceptionName;
        this.docIndex = docIndex;
        this.affectedText = affectedText;
        this.firstMessage = firstMessage;
        this.extendedFeedbackParams = extendedFeedbackParams;
    }

    toLogFormat(clientID: string, sessionID: string): {} {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            misconceptionName: this.misconceptionName,
            docIndex: this.docIndex,
            affectedText: this.affectedText,
            firstMessage: this.firstMessage,
            extendedFeedbackParams: this.extendedFeedbackParams
        };
    }

}

/**
 * Describes an event where the user has clicked on a feedback action
 */
class FeedbackActionEvent extends AbstractEvent {
    private extendedFeedbackParams: string;
    private type: string;

    constructor(eventID: number, extendedFeedbackParams: string, actionType: string) {
        super(eventID.toString());
        this.extendedFeedbackParams = extendedFeedbackParams;
        this.type = actionType;
    }

    toLogFormat(clientID: string, sessionID: string): {} {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            extendedFeedbackParams: this.extendedFeedbackParams,
            type: this.type
        };
    }

}
//#endregion


/**
 * Tracks all events for a single Python file in the editor (i.e. a session)
 */
class FileLog {
    private clientID: string;
    private sessionID: string;
    private lastInteractionEvent: InteractionEvent | undefined;
    private interactionEvents: InteractionEvent[];
    private misconceptionEvents: MisconceptionEvent[];
    private feedbackEvents: FeedbackEvent[];
    private feedbackActionEvents: FeedbackActionEvent[];

    constructor(clientID: string) {
        this.clientID = clientID;
        this.sessionID = uuidV4();
        this.interactionEvents = [];
        this.misconceptionEvents = [];
        this.feedbackEvents = [];
        this.feedbackActionEvents = [];
        // Log new session
        if (clientID !== UNREGISTERED) {
            this.startSession();
        }
    }


    /**
     * Logs a new session in the database if logging is enabled
     */
    async startSession() {
        if (env.isTelemetryEnabled && workspace.getConfiguration().get(createCommand(PRIVACY)) as boolean) {
            try {
                await axios.put(`${API_URL}/session`, { clientID: this.clientID, sessionID: this.sessionID});
            } catch (error) {
                console.log("PyGuide couldn't start a logging session:", error);
            }
        }
    }


    /**
     * Track a new interaction event
     * @param docText The text of the document in the editor
     * @param changes All changes
     * @param time The timestamp of the event
     * @param possibleEventType The type of the event e.g. edit, close
     * @returns The ID of the new event
     */
    addInteraction(docText: string, changes: readonly TextDocumentContentChangeEvent[], 
                    time: number, possibleEventType: EventTypes | undefined) {
        // EventID (work out), EventType (work out), Text (pass in), EditLocation (pass in?), Timestamp (pass in?)
        const eventID = this.lastInteractionEvent ? Number.parseInt(this.lastInteractionEvent.getEventID()) + 1 : 0; 
        // Either the passed in event type (save / close, or open if this is the first event, or insert or delete)
        if (possibleEventType === undefined && this.lastInteractionEvent !== undefined && changes.length === 0) {
            // not a loggable event - duplicate open usually
            return -1;
        }
        const eventType = possibleEventType ? possibleEventType : this.lastInteractionEvent === undefined ? EventTypes.open : changes[0].text.length > 0 ? EventTypes.insert : EventTypes.delete; 
        this.lastInteractionEvent = new InteractionEvent(eventID, eventType,
                                                    this.lastInteractionEvent ? this.lastInteractionEvent.getFullText() : "",
                                                    docText, changes, time);

        this.interactionEvents.push(this.lastInteractionEvent);
        return eventID;
    }


    /**
     * Track a new detected misconception
     * @param eventID The ID of the event the misconception is associated with
     * @param misconceptionInfo Information about the misconception
     */
    addMisconception(eventID: number, misconceptionInfo: Misconception) {
        this.misconceptionEvents.push(new MisconceptionEvent(eventID, misconceptionInfo.type, misconceptionInfo));
    }


    /**
     * Track a feedback object returned by SIDE-lib
     * @param eventID The ID of the event the feedback is associated with
     * @param feedbackInfo Information about the feedback
     */
    addFeedback(eventID: number, feedbackInfo: Feedback) {
        this.feedbackEvents.push(new FeedbackEvent(eventID, feedbackInfo.type, feedbackInfo.docIndex, feedbackInfo.affectedText, feedbackInfo.firstMessage, feedbackInfo.extendedFeedbackParams));
    }


    /**
     * Track an action on feedback (request for extra guidance)
     * @param eventID The ID of the event the feedback is associated with
     * @param feedbackParams The URL params for the extended guidance
     * @param actionSource e.g. code action, diagnostics, code lens
     */
    addFeedbackAction(eventID: number, feedbackParams: string, actionSource: string) {
        this.feedbackActionEvents.push(new FeedbackActionEvent(eventID, feedbackParams, actionSource));
    }


    /**
     * Get the interaction events
     * @returns All tracked interaction events
     */
    getInteractionEvents() {
        return this.interactionEvents;
    }


    /**
     * Get the misconceptions
     * @returns All tracked misconceptions
     */
    getMisconceptionEvents() {
        return this.misconceptionEvents;
    }


    /**
     * Get the feedback objects
     * @returns All tracked feedback objects
     */
    getFeedbackEvents() {
        return this.feedbackEvents;
    }


    /**
     * Get the feedback action events
     * @returns All tracked actions
     */
    getFeedbackActionEvents() {
        return this.feedbackActionEvents;
    }


    updateClientID(newID: string) {
        this.clientID = newID;
    }

    getSessionID() {
        return this.sessionID;
    }


    /**
     * Convert all tracked objects to object literals to be sent to the database
     * @param eventArr An array of tracked objects (JS classes)
     * @returns An array of objects to send to the database
     */
    private prepareToSend(eventArr: AbstractEvent[]) {
        const prepared = [];
        for (const event of eventArr) {
            if (event.getLogStatus() === Status.ready) {
                event.setSaveInProgress();
                prepared.push(event.toLogFormat(this.clientID, this.sessionID));
            }
        }
        return prepared;
    }


    /**
     * Send all data to the database and update local tracking when a response is 
     * received e.g. remove events that have been successfully stored.
     */
    async checkAndSendData() {
        try {
            const interactions = this.prepareToSend(this.interactionEvents);
            const misconceptions = this.prepareToSend(this.misconceptionEvents);
            const feedback = this.prepareToSend(this.feedbackEvents);
            const feedbackActions = this.prepareToSend(this.feedbackActionEvents);
            if (interactions.length > 0 || misconceptions.length > 0 || feedback.length > 0 || feedbackActions.length > 0) {
                const response = (await axios.put(`${API_URL}/store`, { interactions, misconceptions, feedback, feedbackActions})).data as {
                    savedEdits: string[], 
                    failedEdits: string[], 
                    savedMisconceptions: string[], 
                    failedMisconceptions: string[], 
                    savedFeedback: string[], 
                    failedFeedback: string[],
                    savedActions: string[],
                    failedActions: string[]
                };
                const updateAndKeep = (event: AbstractEvent, saved: string[], failed: string[]) => {
                    if (saved.includes(event.getEventID())) {
                        event.setSaveComplete();
                        return false;
                    } else if (failed.includes(event.getEventID()))  {
                        event.setSaveFailed();
                    }
                    return true;
                };

                this.interactionEvents = this.interactionEvents.filter(event => updateAndKeep(event, response.savedEdits, response.failedEdits));
                this.misconceptionEvents = this.misconceptionEvents.filter(event => updateAndKeep(event, response.savedMisconceptions, response.failedMisconceptions));
                this.feedbackEvents = this.feedbackEvents.filter(event => updateAndKeep(event, response.savedFeedback, response.failedFeedback));
                this.feedbackActionEvents = this.feedbackActionEvents.filter(event => updateAndKeep(event, response.savedActions, response.failedActions));
                if (this.interactionEvents.length >= Logger.maxLogSize) {
                    this.checkAndSendData();
                }
            }
        } catch (error) {
            console.log("oops", error);
        }
    }

}


/**
 * The logging controller
 */
export class Logger {
    static maxLogSize = 10;
    private static instance: Logger;
    private uuid: string | undefined;
    private fileIDs: Map<string, FileLog>;
    private isActive: boolean; // The extension log permission is granted AND telemetry is enabled overall
    private localContext: ExtensionContext;
    private static logLevel: boolean;
    private static registrationStatus: number = RegistrationStatus.idPending;
    private userInputCheckComplete: boolean = false;
    private inputReceivedFor: string[] = [];

    private constructor(context: ExtensionContext) {
        const privacy = workspace.getConfiguration().get(createCommand(PRIVACY)) as boolean;
        Logger.logLevel = privacy;

        // Check user settings for telemetry (only log if it is enabled and logLevel is higher than none)
        this.isActive = env.isTelemetryEnabled && Logger.logLevel;

        this.fileIDs = new Map();

        // Get the UUID for this client
        this.localContext = context;
        this.setUUID(context);

        this.getMisconsWithFeedback(context); // get the list of misconceptions that the user has already provided feedback for

        // Listen for telemetry events and push to disposables subscription
        context.subscriptions.push(workspace.onDidChangeConfiguration(e => this.updateLogLevel(e))); // This is causing the rejected promise error
    }


    private async getMisconsWithFeedback(context: ExtensionContext) {
        // Get the misconceptions that have already had feedback
        const STORAGE_KEY = `${context.extension.id}${FEEDBACK_RECEIVED_FOR}`;
        const prevMiscons = await context.globalState.get(STORAGE_KEY);
        if (Array.isArray(prevMiscons)) {
            this.inputReceivedFor = prevMiscons;        
        }
        this.userInputCheckComplete = true;
    }

    haveReceivedUserInputFor(misconType: string) {
        // return true if still waiting on retrieving from storage
        return this.userInputCheckComplete === false || this.inputReceivedFor.includes(misconType);
    }


    userInputReceivedFor(misconType: string) {
        this.inputReceivedFor.push(misconType);
    }


    /**
     * Turns logging on or off when the VSCode telemetry setting is changed or the extension's
     * privacy setting is changed.
     * @param e The updated VSCode configuration
     */
    private updateLogLevel(e: ConfigurationChangeEvent) {
        if (e.affectsConfiguration(createCommand(PRIVACY))) {
            const allowLogging = workspace.getConfiguration().get(`${EXTENSION_ID}.${PRIVACY}`) as boolean;
            Logger.logLevel = allowLogging;
            this.isActive = env.isTelemetryEnabled && Logger.logLevel;
            if (allowLogging) {
                const STORAGE_PROMPT = `${this.localContext.extension.id}${RESEARCH_PROMPT_SENT}`;
                this.localContext.globalState.update(STORAGE_PROMPT, true);
                if (this.uuid === UNREGISTERED) {
                    this.setUUID(this.localContext); // Get the client ID first
                } else {
                    // start a new session
                    this.updatePendingEvents();
                }
            }
            window.showInformationMessage(`PyGuide research data logging ${allowLogging ? "turned on." : "turned off"}`);
        }
    }


    /**
     * Creates a singleton Logger
     * @param context 
     * @returns The existing Logger if it has already been created or a new Logger instance.
     */
    public static getInstance(context: ExtensionContext) {
        if (!Logger.instance) {
            Logger.instance = new Logger(context);
        }
        return Logger.instance;
    }

    /**
     * The main logging method. Tracks all events, misconceptions, 
     * feedback objects, and feedback actions and triggers writing 
     * to the database once the log reaches the maximum size.
     * @param doc The active document in the editor
     * @param changes All changes
     * @param sideLibResult The SIDE-lib output
     * @param eventType The type of event that has occurred
     */
    public log(doc: TextDocument, changes: readonly TextDocumentContentChangeEvent[],
                sideLibResult: SideLibResult, eventType: EventTypes | undefined
    ) {
        // Logger.feedbackRequester.checkAndRequest(); // initiate feedback request, if it's time
        if (this.isActive && Logger.registrationStatus !== RegistrationStatus.idRefused) {
            if (!this.fileIDs.has(doc.fileName)) {
                this.fileIDs.set(doc.fileName, new FileLog(this.uuid ? this.uuid : UNREGISTERED));
            }    
            const currentLog = this.fileIDs.get(doc.fileName);

            const time = Date.now();
            let eventID = -1;
            if (currentLog) {
                if (changes.length === 0) { // open save close action 
                    eventID = currentLog.addInteraction(doc.getText(), changes, time, eventType);
                } else { 
                    for (const change of changes) {
                        eventID = currentLog.addInteraction(doc.getText(), [change], time, eventType);
                    }
                }
                // Add misconception and feedback if detected
                if (eventID > -1) {
                    for (const miscon of sideLibResult.parse.misconceptions) {
                        currentLog.addMisconception(eventID, miscon);
                    } 
                    for (const feedback of sideLibResult.feedback) {
                        currentLog.addFeedback(eventID, feedback);
                    }
                }
                if (this.logIsReady(currentLog)) {
                    currentLog.checkAndSendData();
                }
            }
        }
    }

    /**
     * Logs a feedback action event
     * @param params The URL params for the extended feedback
     * @param fileName The name of the active file in the editor
     * @param source The source of the action e.g. code action, diagnostics, code lens
     */
    public logAction(params: string, fileName: string, source: string) {
        if (this.isActive && Logger.registrationStatus !== RegistrationStatus.idRefused) {
            if (!this.fileIDs.has(fileName)) {
                this.fileIDs.set(fileName, new FileLog(this.uuid ? this.uuid : UNREGISTERED));
            }
            const currentLog = this.fileIDs.get(fileName);
            const time = Date.now();
            if (currentLog) {
                const eventID = currentLog.addInteraction("", [], time, EventTypes.action);
                currentLog.addFeedbackAction(eventID, params, source);
                if (this.logIsReady(currentLog)) {
                    currentLog.checkAndSendData();
                }
            }
        }
    }


    public async logUserInput(misconName: string, firstMessage: string, params: string, usefulness: string, fileName: string, comments: string = "") {
        // Send to server
        try {
            if (!this.fileIDs.has(fileName)) {
                this.fileIDs.set(fileName, new FileLog(this.uuid ? this.uuid : UNREGISTERED));
            }
            const currentLog = this.fileIDs.get(fileName);
            await axios.put(`${API_URL}/userinput`, { 
                clientID: this.uuid, sessionID: currentLog?.getSessionID(),
                misconceptionName: misconName,
                firstMessage,
                extendedFeedbackParams: params,
                usefulness,
                comments
            });
        } catch (error) {
            console.log("PyGuide couldn't start a logging session:", error);
        }
    }


    /**
     * Checks if the client ID is available and if any of the event trackers
     * have exceeded the maximum log size
     * @param fileLog A log associated with a file open in the editor
     * @returns True if events should be sent to the database
     */
    private logIsReady(fileLog: FileLog) {
        return Logger.registrationStatus === RegistrationStatus.idReceived
                && (fileLog.getInteractionEvents().length >= Logger.maxLogSize
                || fileLog.getMisconceptionEvents().length >= Logger.maxLogSize
                || fileLog.getFeedbackEvents().length >= Logger.maxLogSize
                || fileLog.getFeedbackActionEvents().length >= Logger.maxLogSize);
    }


    /**
     * Gets a new UUID for this client
     * @returns The UUID if registration is successful or "unregistered" if not
     */
    private async registerWithDB() {
        try {
            const response = await axios.put(`${API_URL}/register`, { clientType: "VSCodeExtension"});
            return response.data;
        } catch (error) {
            console.log(error);
            return UNREGISTERED;
        }
    }


    /**
     * Gets the UUID for this extension installation. If the extension has not previously 
     * been registered with the database, attempts to register for a new UUID.
     * @param context The current extension
     */
    private async setUUID(context: ExtensionContext) {
        const STORAGE_KEY = `${context.extension.id}_UUID`;

        // For debugging only!
        // await context.globalState.update(STORAGE_KEY, undefined);

        let uuid: string | undefined = context.globalState.get(STORAGE_KEY);
        if (!context.globalState.get(STORAGE_KEY) && this.isActive) {
            Logger.registrationStatus = RegistrationStatus.idPending;
            try {
                uuid = await this.registerWithDB();
                if (uuid !== UNREGISTERED) {
                    context.globalState.update(STORAGE_KEY, uuid)
                        .then(update => console.log("PyGuide UUID stored"))
                        .then(undefined, err => console.log(err));
                    
                }
            } catch (regError) {
                console.log(regError);
            }
            
        } 
        this.uuid = uuid !== undefined ? uuid : UNREGISTERED;
        if (this.uuid !== UNREGISTERED) {
            this.updatePendingEvents();
            Logger.registrationStatus = RegistrationStatus.idReceived;
        } else {
            console.log("PyGuide unable to register this client! Logging is on?", this.isActive);
            Logger.registrationStatus = RegistrationStatus.idRefused;
        }
        console.log("PyGuide UUID:", this.uuid);
    }

    /**
     * Sends the client ID to any FileLogs created before the ID was received.
     */
    private async updatePendingEvents() {
        for (const log of this.fileIDs.values()) {
            if (this.uuid) {
                log.updateClientID(this.uuid);
                await log.startSession();
            }
        }
    }

    /**
     * Get the logging status
     * @returns Whether or not the log is active
     */
    isLogActive() {
        return this.isActive;
    }
}