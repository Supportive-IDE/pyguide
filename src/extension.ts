import {commands, Disposable, ExtensionContext, languages, workspace } from 'vscode';
import { ExtendedGuidance, FeedbackLens, paramsMap, subscribeToDocumentChanges } from './diagnostics';
import { CODELENS_EXTERNAL_FEEDBACK, createCommand, DIAGNOSTIC_EXTERNAL_FEEDBACK, DISABLE, ENABLE, EXTENSION_ID, SHOW_EXTERNAL_FEEDBACK } from './utils';
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
			logger.logAction(args.msg, args.fileName, "codeAction");
			createAndShowWebview(args.msg + `&log=${logger.isLogActive()}`);
        }),
		// Diagnostics click
		commands.registerCommand(createCommand(DIAGNOSTIC_EXTERNAL_FEEDBACK), (args: any) => {
			const params = paramsMap.get(args.code);
			if (params) {
				logger.logAction(params, args.fileName, "diagnostics");
				createAndShowWebview(params + `&log=${logger.isLogActive()}`)
			} else {
				console.log(params, "not found")
			}
		}),
		// CodeLens click
		commands.registerCommand(createCommand(CODELENS_EXTERNAL_FEEDBACK), (args: any) => {
			logger.logAction(args.msg, args.fileName, "codeLens");
			createAndShowWebview(args.msg + `&log=${logger.isLogActive()}`);
		}),
        sideDiagnostics,
        languages.registerCodeActionsProvider('python', new ExtendedGuidance(), {
                providedCodeActionKinds: ExtendedGuidance.providedCodeActionKinds
        }),
		languages.registerCodeLensProvider('python', sideLens)
	);

	disposables.forEach(item => context.subscriptions.push(item));
}


export function deactivate() {
    if (disposables) {
        disposables.forEach(item => item.dispose());
    }
    disposables = [];
}