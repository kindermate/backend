import { UsersRepository } from '@/users/users.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemberCreateDto } from './dto/members.create.dto';
import { MemberUpdateDto } from './dto/members.update.dto';
import { Member } from './member.schema';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(Member.name) private readonly membersModel: Model<Member>,
    private readonly usersRepository: UsersRepository,
  ) {}

  async getMembers(id: string) {
    const user = await this.usersRepository.findUserByIdWithoutPassword(id);
    const members = await this.membersModel.find({ parent: user._id });
    return members;
  }

  async updateMember(body: MemberUpdateDto) {
    const { id, name } = body;
    return await this.membersModel.findByIdAndUpdate(
      id,
      { name },
      { new: true },
    );
  }

  async deleteMember(id: string) {
    return await this.membersModel.findByIdAndDelete(id);
  }

  async createMember(payload: MemberCreateDto) {
    const { parent, name, birth, gender } = payload;
    const parentUser = await this.usersRepository.findUserByIdWithoutPassword(
      parent,
    );
    // 0~9난수 발생(아바타 번호)
    const avatarNumber = Math.floor(Math.random() * 10);
    return await this.membersModel.create({
      parent: parentUser._id,
      name,
      birth,
      gender,
      avatar: avatarNumber,
    });
  }
}
