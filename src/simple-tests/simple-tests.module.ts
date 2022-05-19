import { Module } from '@nestjs/common';
import { SimpleTestsService } from './simple-tests.service';
import { SimpleTestsController } from './simple-tests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SimpleTest, SimpleTestSchema } from './schema/simpleTest.schema';
import {
  SimpleTestQuestion,
  SimpleTestQuestionSchema,
} from './schema/simpleTestQuestion.schema';
import {
  SimpleTestAnswer,
  SimpleTestAnswerSchema,
} from './schema/simpleTestAnswer.schema';
import { Member, MemberSchema } from '@/members/member.schema';
import {
  SimpleTestResult,
  SimpleTestResultSchema,
} from './schema/simpleTestResult.schema';
import {
  SimpleTestResultComment,
  SimpleTestResultCommentSchema,
} from './schema/simpleTestResultComment.schema';
import { User, UserSchema } from '@/users/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SimpleTest.name, schema: SimpleTestSchema },
      { name: SimpleTestAnswer.name, schema: SimpleTestAnswerSchema },
      { name: SimpleTestQuestion.name, schema: SimpleTestQuestionSchema },
      { name: SimpleTestResult.name, schema: SimpleTestResultSchema },
      {
        name: SimpleTestResultComment.name,
        schema: SimpleTestResultCommentSchema,
      },
      { name: Member.name, schema: MemberSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [SimpleTestsService],
  controllers: [SimpleTestsController],
  exports: [MongooseModule],
})
export class SimpleTestsModule {}
