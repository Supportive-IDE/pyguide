export const UNREGISTERED = "unregistered";
export const EXTENSION_PUBLISHER = "supportive-ide";
export const EXTENSION_ID = "pyguide";
// Feedback global variable suffix (combined with extension id)
export const FEEDBACK_RECEIVED_FOR = "_feedback_for";

// Config settings
export const PRIVACY = "allowLogging"; // Also in package.json
export const SHOW_CODE_LENS = "showCodeLens"; // Also in package.json
//export const ALLOW_FEEDBACK_REQUESTS = "feedbackRequest"; // Also in package.json

// Internal commands
export const SHOW_EXTERNAL_FEEDBACK = "showExternalFeedback";
export const REQUEST_USER_INPUT = "requestUserFeedback";
export const DIAGNOSTIC_EXTERNAL_FEEDBACK = "diagnosticExternalFeedback";
export const CODELENS_EXTERNAL_FEEDBACK = "codelensExternalFeedback";

// Commands accessible in the command panel
export const ENABLE = "enable"; // package.json
export const DISABLE = "disable"; // package.json

// Feedback responses
export const MISSED_ISSUE = "Yes - I missed this issue";
export const LEARNED_SOMETHING = "Yes - I learned something";
export const CANT_FIX = "No - I don't know how to fix the issue";
export const ISSUE_IRRELEVANT = "No - It's wrong or irrelevant";
export const LEAVE_FEEDBACK = "Send us a message";


export const createCommand = (command: string) => {
    return `${EXTENSION_ID}.${command}`;
};

export enum EventTypes {
    open = "open",
    insert = "insert",
    delete = "delete",
    cut = "cut",
    paste = "paste",
    run = "run",
    save = "save",
    close = "close",
    action = "action"
}

export const errorIndicators = new Set(["AssignCompares", "ColonAssigns", "LocalVariablesAreGlobal"]);

export const warningIndicators = new Set(["CompareMultipleValuesWithOr", "PrintSameAsReturn", "ReturnWaitsForLoop", "StringMethodsModifyTheString", "TypeConversionModifiesArgument",
    "UnusedReturn"])