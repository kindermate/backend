import * as moment from 'moment';
import { Member } from '@/members/member.schema';
import { User } from '@/users/user.schema';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpleTest } from './schema/simpleTest.schema';
import { SimpleTestQuestion } from './schema/simpleTestQuestion.schema';
import { SimpleTestResult } from './schema/simpleTestResult.schema';
import { SimpleTestResultComment } from './schema/simpleTestResultComment.schema';

@Injectable()
export class SimpleTestsService {
  constructor(
    @InjectModel(SimpleTest.name)
    private readonly simpleTestModel: Model<SimpleTest>,
    @InjectModel(SimpleTestQuestion.name)
    private readonly simpleTestQuestionModel: Model<SimpleTestQuestion>,
    @InjectModel(SimpleTestResult.name)
    private readonly simpleTestResultModel: Model<SimpleTestResult>,
    @InjectModel(SimpleTestResultComment.name)
    private readonly simpleTestResultCommentModel: Model<SimpleTestResultComment>,
    @InjectModel(Member.name)
    private readonly memberModel: Model<Member>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async getSimpleTestAll() {
    // 모든 검사 조회 후 날짜로 필터링
    const tests = await this.simpleTestModel.find(
      {},
      'title subTitle code activationStartDate activationLastDate',
    );
    const finalTests = tests.filter((test) => {
      return moment(new Date()).isBetween(
        test.activationStartDate,
        test.activationLastDate,
      );
    });
    return finalTests;
  }

  async getSimpleTestOne(id: string) {
    const test = await this.simpleTestModel.findById(id);
    return test;
  }

  async getSimpleTestOneByCode(code: string) {
    const test = await this.simpleTestModel.findOne({ code });
    return test;
  }

  async getSimpleTestQuestions(code: string) {
    const questions = await this.simpleTestQuestionModel
      .find({ code })
      .sort('order');
    return questions;
  }

  async saveResult(body: object) {
    const member = await this.memberModel.findById(body['owner']);
    if (member) {
      const result = await this.simpleTestResultModel.create({
        code: body['code'],
        grade: body['grade'],
        owner: member._id,
        score: body['score'],
      });
      return result;
    } else {
      throw new UnauthorizedException('Member ID does not exist.');
    }
  }

  async getSimpleTestResultOne(id: string) {
    const result = await this.simpleTestResultModel.findById(id);
    return result;
  }

  async getSimpleTestResultComment(code: string, grade: string) {
    const comment = await this.simpleTestResultCommentModel.findOne({
      code,
      grade,
    });
    return comment;
  }

  async getSimpleTestResultAll(code: string, owner: string) {
    const member = await this.memberModel.findById(owner);
    const results = await this.simpleTestResultModel.find({
      code,
      owner: member._id,
    });
    return results;
  }
}
