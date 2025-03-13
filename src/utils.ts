export const UNREGISTERED = "unregistered";
export const EXTENSION_PUBLISHER = "supportive-ide";
export const EXTENSION_ID = "pyguide";
export const PRIVACY = "researchDataPrivacy"; // Also in package.json
export const SHOW_EXTERNAL_FEEDBACK = "showExternalFeedback";
export const ENABLE = "enable"; // package.json
export const DISABLE = "disable"; // package.json


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

export const errorIndicators = new Set(["AssignCompares", "ColonAssigns", "CompareMultipleValuesWithOr", "LocalVariablesAreGlobal",
    "PrintSameAsReturn", "ReturnWaitsForLoop", "StringMethodsModifyTheString", "TypeConversionModifiesArgument",
    "UnusedReturn"]);