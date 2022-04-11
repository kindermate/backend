import { Strategy } from 'passport-jwt';
import { Payload } from '@/auth/jwt/jwt.payload';
import { UsersRepository } from '@/users/users.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    validate(payload: Payload): Promise<import("../../users/user.schema").User>;
}
export {};
