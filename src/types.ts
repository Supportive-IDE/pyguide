export type Block = {
    id: string,
    startLine: number,
    children: Block[]
};

export type UserDefinedFunction = {
    name: string,
    block: string,
    parameters: string[],
    numOptionalParameters: number,
    callLineNumbers: number[],
    hasBranchWithoutReturn: boolean,
    hasReturn: boolean,
    returnTypes: string[],
    returnDetail: {
        line: number,
        dataType: string
    }[]
};

export type Symptom = {
    type: string,
    block: string,
    docIndex: number,
    line: number,
    lineIndex: number,
    text: string,
    [key: string]: unknown // Handles any symptom specific properties
};
export type MisconceptionOccurrence = {
    docIndex: number,
    line: number,
    reason: {
        explanation: string,
        contributingSymptoms: Symptom[]
    }
};

export type Misconception = {
    type: string,
    description: string,
    occurrences: MisconceptionOccurrence[]
};

export type GraphNode = {
    id: string,
    entity: string,
    category: string,
    text: string,
    startDocIndex: number,
    endDocIndex: number,
    misconceptions: string[]
};

export type Graph = {
    edges: { [key: string]: string[] },
    nodes: { [key: string]: GraphNode }
};

export type DocInfo = {
    blocks: Block[],
    functions: UserDefinedFunction[],
    symptoms: Symptom[],
    misconceptions: Misconception[],
    graph: Graph
};

export type Feedback = {
    type: string,
    docIndex: number,
    affectedText: string,
    firstMessage: string,
    extendedFeedbackParams: string
};

export type SideLibResult = {
    feedback: Feedback[],
    parse: DocInfo
};