import { Document } from 'mongoose';
export declare class Task extends Document {
    code: string;
    part: number;
    term: string;
    title: string;
    description: string;
    infant: string;
    student: string;
    tags: string;
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any>, undefined, {}>;
