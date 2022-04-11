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
import { Post } from '@/posts/post.schema';
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
      ],
      inject: [
        getModelToken(User.name),
        getModelToken(Member.name),
        getModelToken(Post.name),
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
      ],
      useFactory: (
        userModel: Model<User>,
        memberModel: Model<Member>,
        postModel: Model<Post>,
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
      ) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            { resource: userModel, options: UserOptions },
            { resource: memberModel, options: MemberOptions },
            { resource: postModel, options: PostOptions },
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
          ],
          locale: {
            language: 'en',
            translations: {
              labels: {
                loginWelcome: '안녕하세요',
                User: '회원',
                Member: '검사 대상자',
                Post: '게시글',
                Test: '검사',
                Question: '문항',
                Part: '하위영역',
                Answer: '답안',
                Result: '결과',
                Commentary: '영역결과',
                Extra: '종합소견',
                Week: '주차',
                Task: '미션내용',
                Message: '메시지',
                Mission: '미션',
                Guide: '가이드',
              },
              messages: {
                loginWelcome: '플레이팩토 - 킨더메이트 관리자 사이트입니다.',
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
