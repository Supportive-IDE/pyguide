import { feedbackURL } from "./urls";
import { window, ViewColumn } from "vscode";


/**
 * Create a webview panel and show feedback for the selected diagnostic
 * @param urlParams The URL params used to populate the extended feedback page
 */
export function createAndShowWebview(urlParams: string) {
    const panel = window.createWebviewPanel(
        'pyGuideExtended', // Identifies the type of the webview. Used internally
        'PyGuide', // Title of the panel displayed to the user
        ViewColumn.One, // Editor column to show the new webview panel in.
        {
            enableScripts: true
        }
    );
    panel.webview.html = getWebviewContents(urlParams);
}


/**
 * Create the webview contents
 * @param urlParams The URL params used to populate the extended feedback page
 * @returns The contents of the webview panel as a string
 */
function getWebviewContents(urlParams: string) {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PyGuide</title>
            <style>
                iframe {
                    width: 100vw;
                    height: 100vh;
                    overflow: scroll;
                }
            </style>
        </head>
        <body>
            <iframe src=${feedbackURL}${urlParams}></iframe>
        </body>
    </html>`
}