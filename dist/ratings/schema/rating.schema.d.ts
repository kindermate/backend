import { Document, Types } from 'mongoose';
export declare class Rating extends Document {
    mission: Types.ObjectId;
    code: string;
    week: number;
    rating: number;
}
export declare const RatingSchema: import("mongoose").Schema<Rating, import("mongoose").Model<Rating, any, any>, undefined, {}>;
