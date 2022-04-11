import { Document, Types } from 'mongoose';
export declare class Mission extends Document {
    owner: Types.ObjectId;
    result: Types.ObjectId;
    startDate: Date;
    week: number;
    isComplete: boolean;
    isFinished: boolean;
}
export declare const MissionSchema: import("mongoose").Schema<Mission, import("mongoose").Model<Mission, any, any>, undefined, {}>;
