import { Document, Types } from 'mongoose';
export declare class Answer extends Document {
    owner: Types.ObjectId;
    answers: object;
}
export declare const AnswerSchema: import("mongoose").Schema<Answer, import("mongoose").Model<Answer, any, any>, undefined, {}>;
