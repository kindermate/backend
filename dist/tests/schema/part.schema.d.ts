import { Document } from 'mongoose';
export declare class Part extends Document {
    code: string;
    areaCode: number;
    title: string;
    subTitle: string;
    description: string;
}
export declare const PartSchema: import("mongoose").Schema<Part, import("mongoose").Model<Part, any, any>, undefined, {}>;
