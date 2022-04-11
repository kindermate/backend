import { User } from '@/users/user.schema';
declare const CheckPasswordDto_base: import("@nestjs/common").Type<Pick<User, "username" | "password">>;
export declare class CheckPasswordDto extends CheckPasswordDto_base {
}
export {};
