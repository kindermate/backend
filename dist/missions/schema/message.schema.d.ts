import { Document } from 'mongoose';
export declare class Message extends Document {
    message: string;
    score: number;
    min: number;
    max: number;
    isClosing: boolean;
}
export declare const MessageSchema: import("mongoose").Schema<Message, import("mongoose").Model<Message, any, any>, undefined, {}>;
