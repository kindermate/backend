import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import {
  CommentaryController,
  ExtraContoller,
  ResultsController,
} from './results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Result, ResultSchema } from './schema/result.schema';
import { Member, MemberSchema } from '@/members/member.schema';
import { User, UserSchema } from '@/users/user.schema';
import { Commentary, CommentarySchema } from './schema/commentary.schema';
import { Extra, ExtraSchema } from './schema/extra.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Result.name, schema: ResultSchema },
      { name: Member.name, schema: MemberSchema },
      { name: User.name, schema: UserSchema },
      { name: Commentary.name, schema: CommentarySchema },
      { name: Extra.name, schema: ExtraSchema },
    ]),
  ],
  providers: [ResultsService],
  controllers: [ResultsController, CommentaryController, ExtraContoller],
  exports: [MongooseModule],
})
export class ResultsModule {}
