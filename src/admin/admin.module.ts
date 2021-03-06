import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { Model } from 'mongoose';
import { AdminModule as AdminJSModule } from '@adminjs/nestjs';
import { UsersModule } from '@/users/users.module';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '@/users/user.schema';
import { MembersModule } from '@/members/members.module';
import { Member } from '@/members/member.schema';
import { PostsModule } from '@/posts/posts.module';
import { Post } from '@/posts/schema/post.schema';
import { TestsModule } from '@/tests/tests.module';
import { Test } from '@/tests/schema/test.schema';
import { Question } from '@/tests/schema/question.schema';
import { UserOptions } from '@/admin/options/user.options';
import { MemberOptions } from '@/admin/options/member.options';
import { Part } from '@/tests/schema/part.schema';
import { PostOptions } from './options/post.options';
import { TestOptions } from './options/test.options';
import { QuestionOptions } from './options/question.option';
import { PartOptions } from './options/part.option';
import { Answer } from '@/tests/schema/answer.schema';
import { AnswerOptions } from './options/answer.options';
import { ResultsModule } from '@/results/results.module';
import { Result } from '@/results/schema/result.schema';
import { ResultOptions } from './options/result.options';
import { Commentary } from '@/results/schema/commentary.schema';
import { CommentaryOptions } from './options/commentary.options';
import { Extra } from '@/results/schema/extra.schema';
import { ExtraOptions } from './options/extra.options';
import { MissionsModule } from '@/missions/missions.module';
import { Week } from '@/missions/schema/week.schema';
import { WeekOptions } from './options/week.options';
import { Task } from '@/missions/schema/task.schema';
import { TaskOptions } from './options/task.options';
import { Message } from '@/missions/schema/message.schema';
import { MessageOptions } from './options/message.options';
import { Mission } from '@/missions/schema/mission.schema';
import { MissionOptions } from './options/mission.options';
import { Guide } from '@/guides/schema/guide.schema';
import { GuideOptions } from './options/guide.options';
import { GuidesModule } from '@/guides/guides.module';
import { SimpleTestsModule } from '@/simple-tests/simple-tests.module';
import { SimpleTest } from '@/simple-tests/schema/simpleTest.schema';
import { SimpleTestAnswer } from '@/simple-tests/schema/simpleTestAnswer.schema';
import { SimpleTestQuestion } from '@/simple-tests/schema/simpleTestQuestion.schema';
import { SimpleTestResult } from '@/simple-tests/schema/simpleTestResult.schema';
import { SimpleTestResultComment } from '@/simple-tests/schema/simpleTestResultComment.schema';
import { SimpleTestOptions } from './options/simpleTest.options';
import { SimpleTestAnswerOptions } from './options/simpleTestAnswer.options';
import { SimpleTestQuestionOptions } from './options/simpleTestQuestion.options';
import { SimpleTestResultOptions } from './options/simpleTestResult.options';
import { SimpleTestResultCommentOptions } from './options/simpleTestResultComment.options';
import { Page } from '@/posts/schema/page.schema';
import { PageOptions } from './options/page.options';

AdminJS.registerAdapter(AdminJSMongoose);

const ADMIN = {
  email: 'test',
  password: '1111',
};

@Module({
  imports: [
    AdminJSModule.createAdminAsync({
      imports: [
        UsersModule,
        MembersModule,
        PostsModule,
        TestsModule,
        ResultsModule,
        MissionsModule,
        GuidesModule,
        SimpleTestsModule,
      ],
      inject: [
        getModelToken(User.name),
        getModelToken(Member.name),
        getModelToken(Post.name),
        getModelToken(Page.name),
        getModelToken(Test.name),
        getModelToken(Question.name),
        getModelToken(Part.name),
        getModelToken(Answer.name),
        getModelToken(Result.name),
        getModelToken(Commentary.name),
        getModelToken(Extra.name),
        getModelToken(Week.name),
        getModelToken(Task.name),
        getModelToken(Message.name),
        getModelToken(Mission.name),
        getModelToken(Guide.name),
        getModelToken(SimpleTest.name),
        getModelToken(SimpleTestAnswer.name),
        getModelToken(SimpleTestQuestion.name),
        getModelToken(SimpleTestResult.name),
        getModelToken(SimpleTestResultComment.name),
      ],
      useFactory: (
        userModel: Model<User>,
        memberModel: Model<Member>,
        postModel: Model<Post>,
        pageModel: Model<Page>,
        testModel: Model<Test>,
        questionModel: Model<Question>,
        partModel: Model<Part>,
        answerModel: Model<Answer>,
        resultModel: Model<Result>,
        commentaryModel: Model<Commentary>,
        extraModel: Model<Extra>,
        weekModel: Model<Week>,
        taskModel: Model<Task>,
        messageModel: Model<Message>,
        missionModel: Model<Mission>,
        guideModel: Model<Guide>,
        simpleTestModel: Model<SimpleTest>,
        simpleTestAnswerModel: Model<SimpleTestAnswer>,
        simpleTestQuestionModel: Model<SimpleTestQuestion>,
        simpleTestResultModel: Model<SimpleTestResult>,
        simpleTestResultCommentModel: Model<SimpleTestResultComment>,
      ) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            { resource: userModel, options: UserOptions },
            { resource: memberModel, options: MemberOptions },
            { resource: postModel, options: PostOptions },
            { resource: pageModel, options: PageOptions },
            { resource: testModel, options: TestOptions },
            { resource: questionModel, options: QuestionOptions },
            { resource: partModel, options: PartOptions },
            { resource: answerModel, options: AnswerOptions },
            { resource: resultModel, options: ResultOptions },
            { resource: commentaryModel, options: CommentaryOptions },
            { resource: extraModel, options: ExtraOptions },
            { resource: weekModel, options: WeekOptions },
            { resource: taskModel, options: TaskOptions },
            { resource: messageModel, options: MessageOptions },
            { resource: missionModel, options: MissionOptions },
            { resource: guideModel, options: GuideOptions },
            { resource: simpleTestModel, options: SimpleTestOptions },
            {
              resource: simpleTestAnswerModel,
              options: SimpleTestAnswerOptions,
            },
            {
              resource: simpleTestQuestionModel,
              options: SimpleTestQuestionOptions,
            },
            {
              resource: simpleTestResultModel,
              options: SimpleTestResultOptions,
            },
            {
              resource: simpleTestResultCommentModel,
              options: SimpleTestResultCommentOptions,
            },
          ],
          locale: {
            language: 'en',
            translations: {
              labels: {
                loginWelcome: '???????????????',
                User: '??????',
                Member: '?????? ?????????',
                Post: '?????????',
                Page: '?????????',
                Test: '??????',
                Question: '??????',
                Part: '????????????',
                Answer: '??????',
                Result: '??????',
                Commentary: '????????????',
                Extra: '????????????',
                Week: '??????',
                Task: '????????????',
                Message: '?????????',
                Mission: '??????',
                Guide: '?????????',
                SimpleTest: '??????',
                SimpleTestAnswer: '??????',
                SimpleTestQuestion: '??????',
                SimpleTestResult: '??????',
                SimpleTestResultComment: '?????? ??????',
              },
              messages: {
                loginWelcome: '??????????????? - ??????????????? ????????? ??????????????????.',
              },
            },
          },
          branding: {
            companyName: 'KinderMate',
            logo: false,
          },
        },
        auth: {
          cookieName: 'kindermate',
          cookiePassword: 'kindermate',
          authenticate: async (email, password) => {
            if (ADMIN.password === password && ADMIN.email === email) {
              return ADMIN;
            }
            return null;
          },
        },
      }),
    }),
  ],
})
export class AdminModule {}
