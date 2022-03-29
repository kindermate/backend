import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRequestDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  birth: string;

  @IsString()
  gender: string;

  @IsString()
  address1: string;

  @IsString()
  address2: string;

  @IsString()
  recommander: string;
}
