import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { Test, TestSchema } from './schema/test.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './schema/question.schema';
import { Part, PartSchema } from './schema/part.schema';
import { Answer, AnswerSchema } from './schema/answer.schema';
import { Member, MemberSchema } from '@/members/member.schema';
import { Result, ResultSchema } from '@/results/schema/result.schema';
import { Mission, MissionSchema } from '@/missions/schema/mission.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Test.name, schema: TestSchema },
      { name: Question.name, schema: QuestionSchema },
      { name: Part.name, schema: PartSchema },
      { name: Answer.name, schema: AnswerSchema },
      { name: Member.name, schema: MemberSchema },
      { name: Result.name, schema: ResultSchema },
      { name: Mission.name, schema: MissionSchema },
    ]),
  ],
  providers: [TestsService],
  controllers: [TestsController],
  exports: [MongooseModule],
})
export class TestsModule {}
