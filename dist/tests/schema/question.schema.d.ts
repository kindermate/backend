import { Document } from 'mongoose';
export declare class Question extends Document {
    code: string;
    part: string;
    order: number;
    question: string;
    isInverse: boolean;
}
export declare const QuestionSchema: import("mongoose").Schema<Question, import("mongoose").Model<Question, any, any>, undefined, {}>;
