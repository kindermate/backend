import { User } from '@/users/user.schema';
declare const LoginRequestDto_base: import("@nestjs/common").Type<Pick<User, "username" | "password">>;
export declare class LoginRequestDto extends LoginRequestDto_base {
}
export {};
