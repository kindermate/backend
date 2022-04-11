export declare const PostOptions: {
    parent: {
        name: string;
        icon: string;
    };
    properties: {
        _id: {
            isVisible: {
                list: boolean;
                show: boolean;
            };
        };
        title: {
            isTitle: boolean;
            position: number;
        };
        content: {
            type: string;
            position: number;
        };
        startDate: {
            position: number;
            isVisible: {
                list: boolean;
                show: boolean;
            };
        };
        endDate: {
            position: number;
            isVisible: {
                list: boolean;
                show: boolean;
            };
        };
        createdAt: {
            isVisible: {
                show: boolean;
            };
        };
        updatedAt: {
            isVisible: {
                show: boolean;
            };
        };
    };
};
