import {commands, Disposable, env, ExtensionContext, languages, Uri, workspace} from 'vscode';
import { ExtendedGuidance, subscribeToDocumentChanges } from './diagnostics';
import { createCommand, DISABLE, ENABLE, EXTENSION_ID, feedbackURL, SHOW_EXTERNAL_FEEDBACK } from './utils';
import { Logger } from './logging';

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
		commands.registerCommand(createCommand(SHOW_EXTERNAL_FEEDBACK), (args: any) => {
            logger.logAction(args.msg, args.fileName);
			env.openExternal(Uri.parse(feedbackURL + args.msg));
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