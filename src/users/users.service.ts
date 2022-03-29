import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRequestDto } from './dto/users.request.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAllUsers() {
    const users = this.usersRepository.getAllUsers();
    return users;
  }

  // 회원가입
  async signUp(body: UserRequestDto) {
    const {
      username,
      nickname,
      email,
      password,
      birth,
      gender,
      address1,
      address2,
      recommander,
    } = body;
    const isUserExist = await this.usersRepository.existByEmail(email);

    if (isUserExist) {
      throw new UnauthorizedException('Email already exists.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      username,
      nickname,
      email,
      password: hashedPassword,
      birth,
      gender,
      address1,
      address2,
      recommander,
    });

    return user.readOnlyData;
  }

  // 로그인
  // logIn() {}
}
