import { IsNotEmpty, IsString } from 'class-validator';

export class UserChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
