import { Mission } from '@/missions/schema/mission.schema';
import { Result } from '@/results/schema/result.schema';
import { Answer } from '@/tests/schema/answer.schema';
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
    @InjectModel(Member.name)
    private readonly membersModel: Model<Member>,
    private readonly usersRepository: UsersRepository,
    @InjectModel(Answer.name)
    private readonly answersModel: Model<Answer>,
    @InjectModel(Result.name)
    private readonly resultsModel: Model<Result>,
    @InjectModel(Mission.name)
    private readonly missionsModel: Model<Mission>,
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
    const member = await this.membersModel.findById(id);
    // 답안 삭제
    await this.answersModel.deleteMany({ owner: member._id });
    // 결과 삭제
    await this.resultsModel.deleteMany({ owner: member._id });
    // 미션 삭제
    await this.missionsModel.deleteMany({ owner: member._id });
    // 멤버 삭제
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
