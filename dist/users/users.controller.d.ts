import { UserRequestDto } from '@/users/dto/users.request.dto';
import { UsersService } from '@/users/users.service';
import { AuthService } from '@/auth/auth.service';
import { LoginRequestDto } from '@/auth/dto/login.request.dto';
import { User } from './user.schema';
import { CheckPasswordDto } from '@/auth/dto/checkPassword.dto';
import { UserUpdateDto } from './dto/users.update.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    getAllUsers(): Promise<User[]>;
    getCurrentUser(user: User): {
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
    duplicateCheckUsername(query: object): Promise<string>;
    join(body: UserRequestDto): Promise<{
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
    login(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    checkPassword(data: CheckPasswordDto): Promise<true>;
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
    resetPasswordWidthEmail(email: string): Promise<{
        message: string;
    }>;
}
