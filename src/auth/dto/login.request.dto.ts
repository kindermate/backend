import { User } from '@/users/user.schema';
import { PickType } from '@nestjs/swagger';

export class LoginRequestDto extends PickType(User, [
  'username',
  'password',
] as const) {}
