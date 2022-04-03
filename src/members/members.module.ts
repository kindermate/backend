import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Member, MemberSchema } from './member.schema';
import { UsersModule } from '@/users/users.module';
import { Answer, AnswerSchema } from '@/tests/schema/answer.schema';
import { Result, ResultSchema } from '@/results/schema/result.schema';
import { Mission, MissionSchema } from '@/missions/schema/mission.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
    MongooseModule.forFeature([{ name: Result.name, schema: ResultSchema }]),
    MongooseModule.forFeature([{ name: Mission.name, schema: MissionSchema }]),
    UsersModule,
  ],
  providers: [MembersService],
  controllers: [MembersController],
  exports: [MembersService, MongooseModule],
})
export class MembersModule {}
