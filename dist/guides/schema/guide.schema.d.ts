import { Document } from 'mongoose';
export declare class Guide extends Document {
    code: string;
    extraGrade: string;
    content: string;
}
export declare const GuideSchema: import("mongoose").Schema<Guide, import("mongoose").Model<Guide, any, any>, undefined, {}>;
