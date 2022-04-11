import { Document, Types } from 'mongoose';
export declare class Memo extends Document {
    mission: Types.ObjectId;
    content: string;
    week: number;
}
export declare const MemoSchema: import("mongoose").Schema<Memo, import("mongoose").Model<Memo, any, any>, undefined, {}>;
