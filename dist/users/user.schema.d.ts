import { Document } from 'mongoose';
export declare class User extends Document {
    username: string;
    nickname: string;
    email: string;
    password: string;
    birth: string;
    gender: string;
    address1: string;
    address2: string;
    recommander: string;
    readonly readOnlyData: {
        id: string;
        username: string;
        nickname: string;
        email: string;
        birth: string;
        gender: string;
        address1: string;
        address2: string;
        recommander: string;
    };
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any>, undefined, {}>;
