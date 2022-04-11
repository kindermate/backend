import { Document, Types } from 'mongoose';
export declare class Member extends Document {
    parent: Types.ObjectId;
    name: string;
    birth: string;
    gender: string;
    avatar: number;
    hasActiveMission: boolean;
}
export declare const MemberSchema: import("mongoose").Schema<Member, import("mongoose").Model<Member, any, any>, undefined, {}>;
