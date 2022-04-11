import { Document } from 'mongoose';
export declare class Commentary extends Document {
    code: string;
    part: number;
    grade: string;
    content: string;
}
export declare const CommentarySchema: import("mongoose").Schema<Commentary, import("mongoose").Model<Commentary, any, any>, undefined, {}>;
