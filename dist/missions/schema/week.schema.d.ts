import { Document, Types } from 'mongoose';
export declare class Week extends Document {
    code: string;
    name: string;
    week: number;
    part: number;
    tasksHigh: Types.ObjectId[];
    tasksNormal: Types.ObjectId[];
    tasksLow: Types.ObjectId[];
}
export declare const WeekSchema: import("mongoose").Schema<Week, import("mongoose").Model<Week, any, any>, undefined, {}>;
