export declare const QuestionOptions: {
    parent: {
        name: string;
        icon: string;
    };
    properties: {
        _id: {
            isVisible: boolean;
        };
        code: {
            position: number;
            availableValues: {
                value: string;
                label: string;
            }[];
        };
        part: {
            position: number;
        };
        order: {
            position: number;
        };
        question: {
            position: number;
        };
        isInverse: {
            position: number;
        };
    };
    sort: {
        sortBy: string;
        direction: string;
    };
};
