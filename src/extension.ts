import {commands, Disposable, ExtensionContext, languages, window, workspace } from 'vscode';
import { ExtendedGuidance, FeedbackLens, paramsMap, subscribeToDocumentChanges } from './diagnostics';
import { CANT_FIX, CODELENS_EXTERNAL_FEEDBACK, createCommand, DIAGNOSTIC_EXTERNAL_FEEDBACK, DISABLE, ENABLE, EXTENSION_ID, FEEDBACK_RECEIVED_FOR, ISSUE_IRRELEVANT, LEARNED_SOMETHING, LEAVE_FEEDBACK, MISSED_ISSUE, REQUEST_USER_INPUT, SHOW_EXTERNAL_FEEDBACK } from './utils';
import { Logger } from './logging';
import { createAndShowWebview } from './webview';

let disposables: Disposable[] = [];

export async function activate(context: ExtensionContext) {
	const logger = Logger.getInstance(context);

	const sideDiagnostics = languages.createDiagnosticCollection("PyGuide");
	const sideLens = new FeedbackLens(context);
	subscribeToDocumentChanges(context, sideDiagnostics, sideLens, logger);

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
	// TODO: Update info in settings
}

/**
 * Update internal state when user input is received on a misconception
 * @param misconType The name of the misconception
 * @param context The extension context
 * @param logger The logging controller
 */
async function userInputReceived(misconType: string, context: ExtensionContext, logger: Logger) {
	// context.globalState.get(STORAGE_KEY)
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