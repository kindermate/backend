import { Document } from 'mongoose';
export declare class Extra extends Document {
    code: string;
    status: string;
    title: string;
    content: string;
}
export declare const ExtraSchema: import("mongoose").Schema<Extra, import("mongoose").Model<Extra, any, any>, undefined, {}>;
