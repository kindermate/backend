import { Model, Types } from 'mongoose';
import { User } from '@/users/user.schema';
import { UserRequestDto } from './dto/users.request.dto';
export declare class UsersRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAllUsers(): Promise<User[]>;
    findUserByIdWithoutPassword(userId: string | Types.ObjectId): Promise<User | null>;
    findUserByUsername(username: string): Promise<User | null>;
    existByEmail(email: string): Promise<boolean>;
    create(user: UserRequestDto): Promise<User>;
}
