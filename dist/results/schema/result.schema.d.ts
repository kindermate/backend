import { Document, Types } from 'mongoose';
export declare class Result extends Document {
    owner: Types.ObjectId;
    results: object;
}
export declare const ResultSchema: import("mongoose").Schema<Result, import("mongoose").Model<Result, any, any>, undefined, {}>;
