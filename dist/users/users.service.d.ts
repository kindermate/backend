import { Model } from 'mongoose';
import { UserRequestDto } from './dto/users.request.dto';
import { UserUpdateDto } from './dto/users.update.dto';
import { User } from './user.schema';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly usersRepository;
    private readonly userModel;
    constructor(usersRepository: UsersRepository, userModel: Model<User>);
    getAllUsers(): Promise<User[]>;
    signUp(body: UserRequestDto): Promise<{
        id: string;
        username: string;
        nickname: string;
        email: string;
        birth: string;
        gender: string;
        address1: string;
        address2: string;
        recommander: string;
    }>;
    duplicateCheckUsername(username: string): Promise<string>;
    updateUser(id: string, userData: UserUpdateDto): Promise<{
        id: string;
        username: string;
        nickname: string;
        email: string;
        birth: string;
        gender: string;
        address1: string;
        address2: string;
        recommander: string;
    }>;
    changePassword(id: string, data: {
        password: string;
    }): Promise<{
        id: string;
        username: string;
        nickname: string;
        email: string;
        birth: string;
        gender: string;
        address1: string;
        address2: string;
        recommander: string;
    }>;
    findUsernameWithEmail(email: string): Promise<{
        message: string;
    }>;
    resetPasswordWithEmail(email: string): Promise<{
        message: string;
    }>;
}
