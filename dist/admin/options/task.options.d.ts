export declare const TaskOptions: {
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
        part: {
            position: number;
        };
        term: {
            position: number;
            availableValues: {
                value: string;
                label: string;
            }[];
        };
        title: {
            position: number;
        };
        description: {
            position: number;
            isVisible: {
                list: boolean;
                show: boolean;
                edit: boolean;
            };
        };
        infant: {
            position: number;
            type: string;
            isVisible: {
                list: boolean;
                show: boolean;
                edit: boolean;
            };
        };
        student: {
            position: number;
            type: string;
            isVisible: {
                list: boolean;
                show: boolean;
                edit: boolean;
            };
        };
        tags: {
            position: number;
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
