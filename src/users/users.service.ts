import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model, Types } from 'mongoose';
import { UserChangePasswordDto } from './dto/users.changePassword.dto';
import { UserRequestDto } from './dto/users.request.dto';
import { UserUpdateDto } from './dto/users.update.dto';
import { User } from './user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

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

  // username 중복체크
  async duplicateCheckUsername(username: string) {
    const result = await this.userModel.exists({ username });
    if (result) {
      throw new UnauthorizedException('Username already exists.');
    }
    return 'Username is available.';
  }

  // 회원 정보 수정
  async updateUser(id: string, userData: UserUpdateDto) {
    const user = await this.userModel.findByIdAndUpdate(id, userData, {
      new: true,
    });
    return user.readOnlyData;
  }

  // 비밀번호 변경
  async changePassword(id: string, data: { password: string }) {
    const { password } = data;
    console.log(id, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.findByIdAndUpdate(
      id,
      {
        password: hashedPassword,
      },
      { new: true },
    );
    return user.readOnlyData;
  }
}
