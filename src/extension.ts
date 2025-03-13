import {commands, Disposable, ExtensionContext, languages, workspace } from 'vscode';
import { ExtendedGuidance, paramsMap, subscribeToDocumentChanges } from './diagnostics';
import { createCommand, DISABLE, ENABLE, EXTENSION_ID, SHOW_EXTERNAL_FEEDBACK } from './utils';
import { Logger } from './logging';
import { createAndShowWebview } from './webview';

let disposables: Disposable[] = [];

export async function activate(context: ExtensionContext) {
	const logger = Logger.getInstance(context);

	const sideDiagnostics = languages.createDiagnosticCollection("PyGuide");
	subscribeToDocumentChanges(context, sideDiagnostics, logger);

	disposables.push(
		commands.registerCommand(createCommand(ENABLE), () => {
			workspace.getConfiguration(EXTENSION_ID).update(ENABLE, true, true);
		}),
		commands.registerCommand(createCommand(DISABLE), () => {
			workspace.getConfiguration(EXTENSION_ID).update(ENABLE, false, true);
		}),
		// Code action click
		commands.registerCommand(createCommand(SHOW_EXTERNAL_FEEDBACK), (args: any) => {
			logger.logAction(args.msg, args.fileName);
			createAndShowWebview(args.msg + `&log=${logger.isLogActive()}`);
        }),
		commands.registerCommand(createCommand("test"), (args: any) => {
			const params = paramsMap.get(args.code);
			if (params) {
				logger.logAction(params, args.fileName);
				createAndShowWebview(params + `&log=${logger.isLogActive()}`)
			} else {
				console.log(params, "not found")
			}
		}),
        sideDiagnostics,
        languages.registerCodeActionsProvider('python', new ExtendedGuidance(), {
                providedCodeActionKinds: ExtendedGuidance.providedCodeActionKinds
        })
	);

	disposables.forEach(item => context.subscriptions.push(item));
}


export function deactivate() {
    if (disposables) {
        disposables.forEach(item => item.dispose());
    }
    disposables = [];
}