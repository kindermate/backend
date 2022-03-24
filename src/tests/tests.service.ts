import { Member } from '@/members/member.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnswerCreateDto } from './dto/answer.create.dto';
import { Answer } from './schema/answer.schema';
import { Question } from './schema/question.schema';
import { Test } from './schema/test.schema';
import makeResultData from '@/utils/makeResultData';
import { Result } from '@/results/schema/result.schema';
import { Mission } from '@/missions/schema/mission.schema';

@Injectable()
export class TestsService {
  constructor(
    @InjectModel(Question.name)
    private readonly questionModel: Model<Question>,
    @InjectModel(Test.name)
    private readonly testModel: Model<Test>,
    @InjectModel(Answer.name)
    private readonly answerModel: Model<Answer>,
    @InjectModel(Member.name)
    private readonly memberModel: Model<Member>,
    @InjectModel(Result.name)
    private readonly resultModel: Model<Result>,
    @InjectModel(Mission.name)
    private readonly missionModel: Model<Mission>,
  ) {}

  async getTest(code: string): Promise<Test> {
    const test = await this.testModel.findOne({ code: code });
    return test;
  }

  async getAllQuestion(code: string): Promise<Question[]> {
    const questions = await this.questionModel.find({ code: code });
    return questions;
  }

  async createAnswer(body: AnswerCreateDto): Promise<Answer> {
    const { _id, birth, gender } = await this.memberModel.findById({
      _id: body.owner,
    });
    // console.log(_id, birth, gender);
    // console.log(body.answers);

    // 결과 생성/저장
    const results = makeResultData(birth, gender, body.answers);
    const createdResult = new this.resultModel({
      owner: _id,
      results,
    });
    await createdResult.save();

    // 미션 생성
    const mission = new this.missionModel({
      owner: _id,
      result: createdResult._id,
      week: 1,
      isComplete: false,
    });
    await mission.save();

    // 답안 저장
    const answer = await this.answerModel.create({
      owner: _id,
      answers: body.answers,
    });
    return answer;
  }
}
