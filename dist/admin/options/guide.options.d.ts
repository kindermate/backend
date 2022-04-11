export declare const GuideOptions: {
    parent: {
        name: string;
        icon: string;
    };
    properties: {
        _id: {
            position: number;
        };
        code: {
            position: number;
            availableValues: {
                value: string;
                label: string;
            }[];
        };
        extraGrade: {
            position: number;
        };
        content: {
            position: number;
            type: string;
        };
        createdAt: {
            position: number;
            isVisible: {
                show: boolean;
            };
        };
        updatedAt: {
            isVisible: boolean;
        };
    };
    sort: {
        sortBy: string;
        direction: string;
    };
};
