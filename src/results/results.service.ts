import { Member } from '@/members/member.schema';
import { User } from '@/users/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result } from './schema/result.schema';
import { Commentary } from './schema/commentary.schema';
import { Extra } from './schema/extra.schema';

@Injectable()
export class ResultsService {
  constructor(
    @InjectModel(Result.name)
    private readonly resultModel: Model<Result>,
    @InjectModel(Member.name)
    private readonly memberModel: Model<Member>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Commentary.name)
    private readonly commentaryModel: Model<Commentary>,
    @InjectModel(Extra.name)
    private readonly extraModel: Model<Extra>,
  ) {}

  async getResultAll(id: string) {
    const user = await this.userModel.findById(id);
    const members = await this.memberModel
      .find({ parent: user._id })
      .populate({ path: 'results', options: { sort: { createdAt: -1 } } });
    // console.log(members);
    // const results = await this.resultModel.find({ owner: member._id });
    return members;
  }

  async getCommentary(query: string) {
    const result = {
      CTT: {},
      MAT: {},
      PBT: {},
      EXTRA: {},
    };
    const cttArray = query['CTT'].split(',');
    await Promise.all(
      cttArray.map(async (grade: string, index: number) => {
        const data = await this.commentaryModel.findOne({
          code: 'CTT',
          part: index + 1,
          grade: grade,
        });
        result['CTT'][index] = data.content;
      }),
    );
    const matArray = query['MAT'].split(',');
    await Promise.all(
      matArray.map(async (grade: string, index: number) => {
        const data = await this.commentaryModel.findOne({
          code: 'MAT',
          part: index + 1,
          grade: grade,
        });
        result['MAT'][index] = data.content;
      }),
    );
    const pbtArray = query['PBT'].split(',');
    await Promise.all(
      pbtArray.map(async (grade: string, index: number) => {
        const data = await this.commentaryModel.findOne({
          code: 'PBT',
          part: index + 1,
          grade: grade,
        });
        result['PBT'][index] = data.content;
      }),
    );
    const extraArray = query['EXTRA'].split(',');
    const extraCTT = await this.extraModel.findOne({
      code: 'CTT',
      status: extraArray[0],
    });
    const extraPBT = await this.extraModel.findOne({
      code: 'PBT',
      status: extraArray[1],
    });
    result['EXTRA'][0] = { title: extraCTT.title, content: extraCTT.content };
    result['EXTRA'][1] = { title: extraPBT.title, content: extraPBT.content };

    return result;
  }
}
