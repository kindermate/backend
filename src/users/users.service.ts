import * as nodemailer from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';
import * as bcrypt from 'bcrypt';
import * as ejs from 'ejs';
import * as crypto from 'crypto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  async getUsersForExcel() {
    return await this.usersRepository.getUsersForExcel();
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

  // username 찾기(이메일 보내기)
  async findUsernameWithEmail(email: string) {
    const user = await this.userModel.findOne({ email: email });

    if (!user) {
      throw new UnauthorizedException(
        '해당 이메일로 가입한 내역이 존재하지 않습니다.',
      );
    }

    const ses = new aws.SES({
      apiVersion: '2010-12-01',
      region: process.env.AWS_REGION_ID,
    });

    const mailer = nodemailer.createTransport({
      SES: { ses, aws },
    });

    let template: string;
    ejs.renderFile(
      'src/utils/emails/findUsername.ejs',
      { username: user.username },
      (err, data) => {
        if (err) {
          console.log(err);
        }
        template = data;
      },
    );

    await mailer.sendMail({
      from: '킨더메이트 <no-reply@kindermate.io>',
      to: email,
      subject: '[킨더메이트] 아이디 찾기 결과입니다.',
      html: template,
    });

    return { message: `${email}로 가입 시 입력하신 아이디를 보내드렸습니다.` };
  }

  // 임시 비밀번호 발송
  async resetPasswordWithEmail(email: string) {
    const user = await this.userModel.findOne({ email: email });

    // 임시 비밀번호 생성
    const tempPassword = crypto.randomBytes(3).toString('hex');
    // 임시 비밀번호 hash
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    if (user) {
      user.password = hashedPassword;
      await user.save();
    } else {
      throw new UnauthorizedException(
        '해당 이메일로 가입한 내역이 존재하지 않습니다.',
      );
    }

    // 이메일 전송 셋팅
    const ses = new aws.SES({
      apiVersion: '2010-12-01',
      region: process.env.AWS_REGION_ID,
    });

    const mailer = nodemailer.createTransport({
      SES: { ses, aws },
    });

    let template: string;
    ejs.renderFile(
      'src/utils/emails/resetPassword.ejs',
      { password: tempPassword },
      (err, data) => {
        if (err) {
          console.log(err);
        }
        template = data;
      },
    );

    await mailer.sendMail({
      from: '킨더메이트 <no-reply@kindermate.io>',
      to: email,
      subject: '[킨더메이트] 임시 비밀번호를 보내드립니다.',
      html: template,
    });

    return { message: `${email}로 임시 비밀번호를 보내드렸습니다.` };
  }
}
