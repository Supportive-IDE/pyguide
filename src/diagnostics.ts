import { 
    Diagnostic, Range, DiagnosticSeverity, TextDocument, DiagnosticCollection, 
    ExtensionContext, window, workspace, CodeActionProvider, CodeActionKind, 
    Selection, CodeActionContext, CancellationToken, CodeAction, env, Uri,
    Position, TextDocumentContentChangeEvent,
    CodeLensProvider,
    CodeLens,
    EventEmitter, Event,
    ConfigurationChangeEvent
} from 'vscode';
const sideLib = require('./lib/side-lib.es.js');
import { Feedback, SideLibResult } from './types';
import { CODELENS_EXTERNAL_FEEDBACK, DIAGNOSTIC_EXTERNAL_FEEDBACK, EXTENSION_ID, EventTypes, SHOW_CODE_LENS, SHOW_EXTERNAL_FEEDBACK, createCommand, errorIndicators } from './utils';
import { Logger } from './logging';

// Stores the parameters associated with each diagnostic
export const paramsMap = new Map<string, string>();

/**
 * Gets all feedback instances from SIDE-lib and creates diagnostics. 
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param sideDiagnostics diagnostic collection
 * @param sideLens code lens provider
 * @param logger the Logger
 */
export function refreshDiagnostics(doc: TextDocument, 
    sideDiagnostics: DiagnosticCollection, 
    sideLens: FeedbackLens,
    logger: Logger, 
    changes: readonly TextDocumentContentChangeEvent[] = [], 
    eventType: EventTypes | undefined = undefined): void {
    if (doc.languageId === 'python') {
        // set up
        const diagnostics: Diagnostic[] = [];
        const codeLenses: CodeLens[] = [];
        paramsMap.clear();

        // Check for misconceptions and feedback 
        const result: SideLibResult = sideLib.feedback(doc.getText(), true);

        // Log all results
        sendToLog(doc, result, logger, changes, eventType);
        // Update the diagnostics
        for (const feedback of result.feedback) {
            // Create diagnostics
            const diagnostic = createDiagnostic(feedback, doc.positionAt(feedback.docIndex), doc.positionAt(feedback.docIndex + feedback.affectedText.length), doc.fileName);
            diagnostics.push(diagnostic);
            // Create code lenses
            if (FeedbackLens.enabled) {
                const codeLens = sideLens.createCodeLens(feedback, doc.positionAt(feedback.docIndex), doc.positionAt(feedback.docIndex + feedback.affectedText.length), doc.fileName);
                codeLenses.push(codeLens);
                sideLens.refreshCodeLenses(codeLenses);
            }
        }

        sideDiagnostics.set(doc.uri, diagnostics);
    }
}


/**
 * Attempt to log the latest event
 * @param doc The open file in the editor
 * @param result Object returned from SIDE-lib
 * @param logger The logging controller
 * @param changes All changes in the doc
 * @param eventType The type of event
 */
function sendToLog(doc: TextDocument, result: SideLibResult, logger: Logger, changes: readonly TextDocumentContentChangeEvent[] = [], eventType: EventTypes | undefined = undefined) {
    try {
        logger.log(doc, changes, result, eventType);
    } catch (error) {
        console.log("LOGGING ERROR", error);
    }
}

/**
 * Create a diagnostic for a feedback instance
 * @param feedback The feedback object
 * @param start The start Position of the affected text
 * @param end The end Position of the affected text
 * @returns A VSCode Diagnostic
 */
function createDiagnostic(feedback: Feedback, start: Position, end: Position, docName: string) {
    const range = new Range(start, end);
    const message = feedback.firstMessage;
    const severity = errorIndicators.has(feedback.type) ? DiagnosticSeverity.Error : DiagnosticSeverity.Information;
    const diagnostic = new Diagnostic(
        range, message, severity 
    );
    diagnostic.source = EXTENSION_ID;
    const code = `${feedback.type}-${feedback.docIndex}`;
    const args = [{msg: feedback.extendedFeedbackParams, fileName: docName, source:"createDiagnostic"}];
    const codeLookup = [{code, fileName: docName}];
    diagnostic.code = {
        value: code,
        target: Uri.parse(`command:${createCommand(DIAGNOSTIC_EXTERNAL_FEEDBACK)}?${encodeURIComponent(JSON.stringify(codeLookup))}`)
    };
    paramsMap.set(code, feedback.extendedFeedbackParams);
    return diagnostic;
}

/**
 * Listens for document changes and trigger a refresh of the diagnostics
 * TODO: modify this so that it updates EITHER diagnostics OR code lenses
 * @param context the extension context
 * @param sideDiagnostics the diagnostics generated by SIDE-lib
 * @param sideLens the code lens provider
 * @param logger the Logger
 */
export function subscribeToDocumentChanges(context: ExtensionContext, sideDiagnostics: DiagnosticCollection, sideLens: FeedbackLens, logger: Logger): void {
	if (window.activeTextEditor) {
        refreshDiagnostics(window.activeTextEditor.document, 
                           sideDiagnostics, sideLens,
                           logger);
	}
	context.subscriptions.push(
		window.onDidChangeActiveTextEditor(editor => {
			if (editor) {
                refreshDiagnostics(editor.document, sideDiagnostics, sideLens, logger);
			}
		})
	);

	context.subscriptions.push(
		workspace.onDidChangeTextDocument(e => {
            refreshDiagnostics(e.document, sideDiagnostics, sideLens, logger, e.contentChanges); // Done
}       )
	);

	context.subscriptions.push(
		workspace.onDidCloseTextDocument(doc => {
            sideDiagnostics.delete(doc.uri);
            refreshDiagnostics(doc, sideDiagnostics, sideLens, logger, [], EventTypes.close);
        })
	);

    context.subscriptions.push(
        workspace.onDidSaveTextDocument(doc => {
            refreshDiagnostics(doc, sideDiagnostics, sideLens, logger, [], EventTypes.save);
        }),
    );
}

/**
 * Provides code actions corresponding to diagnostic problems.
 */
export class ExtendedGuidance implements CodeActionProvider {
    public static readonly providedCodeActionKinds = [
		CodeActionKind.Empty
	];

	provideCodeActions(_document: TextDocument, _range: Range | Selection, context: CodeActionContext, _token: CancellationToken): CodeAction[] {
		return context.diagnostics.map(diagnostic => this.createCommandCodeAction(diagnostic, _document.fileName));
	}

    private isPunctuation(lastChar: string) {
        return lastChar === '.' || lastChar === '!' || lastChar === '?';
    }

	private createCommandCodeAction(diagnostic: Diagnostic, docName: string): CodeAction {
        const action = new CodeAction(`${this.isPunctuation(diagnostic.message.charAt(diagnostic.message.length - 1)) ? diagnostic.message : diagnostic.message + "." } Learn more...`, CodeActionKind.Empty);
		const code = diagnostic.code as { value: string; target: Uri; };
        const msg = code ? paramsMap.get(code.value) : "";
        if (msg) {
            action.command = { command: createCommand(SHOW_EXTERNAL_FEEDBACK), title: `Learn more...`, tooltip: 'Open extended guidance.', arguments: [{msg: msg, fileName: docName, source:"createCommandAction"}] };
            action.diagnostics = [diagnostic];
            action.isPreferred = true;
        }
        
        return action;
	}
}


export class FeedbackLens implements CodeLensProvider {
    private codeLenses: CodeLens[] = [];
    static enabled: boolean = true;

    constructor(context: ExtensionContext) {
        FeedbackLens.enabled = workspace.getConfiguration().get(createCommand(SHOW_CODE_LENS)) as boolean;
        context.subscriptions.push(workspace.onDidChangeConfiguration(e => this.checkCodeLensStatus(e)));
    }

    private checkCodeLensStatus(e: ConfigurationChangeEvent) {
        if (e.affectsConfiguration(createCommand(SHOW_CODE_LENS))) {
            FeedbackLens.enabled = workspace.getConfiguration().get(createCommand(SHOW_CODE_LENS)) as boolean;
            if (!FeedbackLens.enabled) {
                this.codeLenses = [];
                this._onDidChangeCodeLenses.fire();
            }
        }
    }

    private _onDidChangeCodeLenses: EventEmitter<void> = new EventEmitter<void>();
    
    public readonly onDidChangeCodeLenses: Event<void> = this._onDidChangeCodeLenses.event;

    public createCodeLens(feedback: Feedback, start: Position, end: Position, docName: string) {
        return new CodeLens(
            new Range(start, end),
            {
                title: feedback.firstMessage,
                command: createCommand(CODELENS_EXTERNAL_FEEDBACK),
                tooltip: 'Click for more help',
                arguments: [{msg: feedback.extendedFeedbackParams, fileName: docName, source:"CodeLens"}]
            }
        )
    }

    public refreshCodeLenses(codeLenses: CodeLens[]) {
        this.codeLenses = codeLenses;
        this._onDidChangeCodeLenses.fire();
    }

    public provideCodeLenses(_: TextDocument): CodeLens[] {
        return this.codeLenses;
    }
}