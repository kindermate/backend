import { UsersRepository } from '@/users/users.repository';
import { LoginRequestDto } from '@/auth/dto/login.request.dto';
import { JwtService } from '@nestjs/jwt';
import { CheckPasswordDto } from './dto/checkPassword.dto';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    jwtLogin(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    checkPassword(data: CheckPasswordDto): Promise<true>;
}
