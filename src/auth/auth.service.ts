import { UsersRepository } from '@/users/users.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequestDto } from '@/auth/dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}
  async jwtLogin(data: LoginRequestDto) {
    const { username, password } = data;

    // username 검색
    const user = await this.usersRepository.findUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException('아이디를 확인해주세요.');
    }

    // password 일치 여부
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('비밀번호가 틀렸습니다.');
    }

    const payload = { username: username, sub: user.id };

    return {
      token: this.jwtService.sign(payload, { secret: process.env.SECRET }),
    };
  }
}
