import { Document } from 'mongoose';
export declare class Post extends Document {
    title: string;
    content: string;
    thumbnail: string;
    startDate: Date;
    endDate: Date;
    isPublic: boolean;
    isNotice: boolean;
    isImportant: boolean;
    isDocument: boolean;
}
export declare const PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any>, undefined, {}>;
