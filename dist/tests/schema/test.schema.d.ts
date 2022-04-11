import { Document } from 'mongoose';
export declare class Test extends Document {
    code: string;
    title: string;
    subTitle: string;
    description: string;
    notice: string;
    time: number;
}
export declare const TestSchema: import("mongoose").Schema<Test, import("mongoose").Model<Test, any, any>, undefined, {}>;
