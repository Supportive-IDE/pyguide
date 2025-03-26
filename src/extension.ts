import {commands, Disposable, env, ExtensionContext, languages, window, workspace } from 'vscode';
import { ExtendedGuidance, FeedbackLens, paramsMap, subscribeToDocumentChanges } from './diagnostics';
import { AGREE_TO_HELP, CANT_FIX, CODELENS_EXTERNAL_FEEDBACK, createCommand, DIAGNOSTIC_EXTERNAL_FEEDBACK, DISABLE, ENABLE, EXTENSION_ID, FEEDBACK_RECEIVED_FOR, INSTALL_DATE, ISSUE_IRRELEVANT, LEARNED_SOMETHING, LEAVE_FEEDBACK, MISSED_ISSUE, PRIVACY, REQUEST_USER_INPUT, RESEARCH_PROMPT_SENT, SHOW_EXTERNAL_FEEDBACK } from './utils';
import { Logger } from './logging';
import { createAndShowWebview } from './webview';

let disposables: Disposable[] = [];

export async function activate(context: ExtensionContext) {
	// debuggingOnlyClearAllStorage(context);

	const logger = Logger.getInstance(context);

	const sideDiagnostics = languages.createDiagnosticCollection("PyGuide");
	const sideLens = new FeedbackLens(context);
	subscribeToDocumentChanges(context, sideDiagnostics, sideLens, logger);
	registerForResearchPrompt(context);

	disposables.push(
		commands.registerCommand(createCommand(ENABLE), () => {
			workspace.getConfiguration(EXTENSION_ID).update(ENABLE, true, true);
		}),
		commands.registerCommand(createCommand(DISABLE), () => {
			workspace.getConfiguration(EXTENSION_ID).update(ENABLE, false, true);
		}),
		// Code action click
		commands.registerCommand(createCommand(SHOW_EXTERNAL_FEEDBACK), (args: any) => {
			showExtendedGuidance(args.msg, args.fileName, "codeAction", logger);
        }),
		// Diagnostics click
		commands.registerCommand(createCommand(DIAGNOSTIC_EXTERNAL_FEEDBACK), (args: any) => {
			const params = paramsMap.get(args.code);
			if (params) {
				showExtendedGuidance(params, args.fileName, "diagnostics", logger);
			}
		}),
		// CodeLens (feedback) click
		commands.registerCommand(createCommand(CODELENS_EXTERNAL_FEEDBACK), (args: any) => {
			showExtendedGuidance(args.msg, args.fileName, "codeLens", logger)
		}),
		// User clicked "was this helpful?"
		commands.registerCommand(createCommand(REQUEST_USER_INPUT), (args: any) => {
			getUserInput(args, context, logger);
		}),
        sideDiagnostics,
        languages.registerCodeActionsProvider('python', new ExtendedGuidance(), {
                providedCodeActionKinds: ExtendedGuidance.providedCodeActionKinds
        }),
		languages.registerCodeLensProvider('python', sideLens)
	);

	disposables.forEach(item => context.subscriptions.push(item));
}

/**
 * FOR DEBUGGING ONLY!
 * Call / modify this function to clear certain global storage variables
 * @param context 
 */
function debuggingOnlyClearAllStorage(context: ExtensionContext) {
	const STORAGE_KEY = `${context.extension.id}_UUID`; // DB id - clearing will create new client in the database
	const STORAGE_INSTALL = `${context.extension.id}${INSTALL_DATE}`; // When the extension was installed
	const STORAGE_PROMPT = `${context.extension.id}${RESEARCH_PROMPT_SENT}`; // Whether or not the user has seen the prompt to participate
	const STORAGE_MISCONS = `${context.extension.id}${FEEDBACK_RECEIVED_FOR}`; // List of misconceptions the user has provided feedback for

	// context.globalState.update(STORAGE_KEY, undefined);
	// context.globalState.update(STORAGE_INSTALL, undefined);
	context.globalState.update(STORAGE_PROMPT, undefined);
	context.globalState.update(STORAGE_MISCONS, undefined);
}


/**
 * Opens the extended guidance in a webview
 * @param params The URL params for the extended guidance
 * @param fileName The name of the active file
 * @param source A string representation of the object the user interacted with
 * @param logger The logging controller
 */
function showExtendedGuidance(params: string, fileName: string, source: string, logger: Logger) {
	logger.logAction(params, fileName, source);
	createAndShowWebview(params + `&log=${logger.isLogActive()}`)
}


/**
 * Controls if and when a prompt to participate in the research should be shown. The conditions:
 * - Global telemetry is enabled
 * - PyGuide logging is not enabled
 * - At least 48 hours have elapsed since the extension was installed
 * - The user has not already been prompted to participate
 * @param context The extension context
 */
async function registerForResearchPrompt(context: ExtensionContext) {
	const STORAGE_INSTALL = `${context.extension.id}${INSTALL_DATE}`;
	const installDate = await context.globalState.get(STORAGE_INSTALL);
	if (installDate === undefined) {
		context.globalState.update(STORAGE_INSTALL, Date.now());
	}
	const STORAGE_PROMPT = `${context.extension.id}${RESEARCH_PROMPT_SENT}`;
	const isLoggingEnabled = workspace.getConfiguration().get(createCommand(PRIVACY)) as boolean
	const hasSeenPrompt = await context.globalState.get(STORAGE_PROMPT);
	if (env.isTelemetryEnabled && !isLoggingEnabled && (hasSeenPrompt === undefined || hasSeenPrompt as boolean === false)) {
		const MIN_TIME = 48 * 60 * 60 * 1000; // wait at least 48 hours
		const elapsedTime = Date.now() - (installDate as number);
		const waitTime = elapsedTime > MIN_TIME ? 5 * 60 * 1000 : MIN_TIME - elapsedTime;
		setTimeout(async () => {
			const input = await window.showInformationMessage("Research participants needed! Help researchers at the University of York to improve IDEs for beginner programmers.", AGREE_TO_HELP, "No, thanks");
			context.globalState.update(STORAGE_PROMPT, true);
			if (input === AGREE_TO_HELP) {
				commands.executeCommand( 'workbench.action.openSettings', `${EXTENSION_ID}.${PRIVACY}`);
			}
		}, waitTime);
	}
}


/**
 * Handles user input after they have clicked the input request code lens
 * @param args The misconception details
 * @param context The extension context
 * @param logger The logging controller
 */
async function getUserInput(args: {misconType: string, message: string, extendedParams: string, fileName: string}, context: ExtensionContext, logger: Logger) {
	// {misconType: feedback.type, message: feedback.firstMessage, extendedParams: feedback.extendedFeedbackParams, fileName: docName}
	const input = await window.showInformationMessage("Was this message helpful?", {
		detail: args.message,
		modal: true,
	},
	MISSED_ISSUE, LEARNED_SOMETHING, CANT_FIX, ISSUE_IRRELEVANT, LEAVE_FEEDBACK); 
	if (input === LEAVE_FEEDBACK) {
		const msg = await window.showInputBox({
			title: `Send us a message about ${args.message}`,
			prompt: `Enter your comments`,
		});
		if (msg !== "") {
			logger.logUserInput(args.misconType, args.message, args.extendedParams, input, args.fileName, msg !== undefined ? msg : "");
			userInputReceived(args.misconType, context, logger);
		}
	} else if (input !== undefined) {
		logger.logUserInput(args.misconType, args.message, args.extendedParams, input, args.fileName);
		userInputReceived(args.misconType, context, logger);
	}
	// TODO: Update info in settings - also need way to prompt user to activate logging
}

/**
 * Update internal state when user input is received on a misconception
 * @param misconType The name of the misconception
 * @param context The extension context
 * @param logger The logging controller
 */
async function userInputReceived(misconType: string, context: ExtensionContext, logger: Logger) {
	// Update internal tracking for this misconception
	logger.userInputReceivedFor(misconType);

	const STORAGE_KEY = `${context.extension.id}${FEEDBACK_RECEIVED_FOR}`;
	const prevMiscons = await context.globalState.get(STORAGE_KEY);
	if (!Array.isArray(prevMiscons)) {
		context.globalState.update(STORAGE_KEY, [misconType]);
	}
	else {
		context.globalState.update(STORAGE_KEY, [...prevMiscons, misconType]);
	}
}


export function deactivate() {
    if (disposables) {
        disposables.forEach(item => item.dispose());
    }
    disposables = [];
}