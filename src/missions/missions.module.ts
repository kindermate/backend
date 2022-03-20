import { Member, MemberSchema } from '@/members/member.schema';
import { User, UserSchema } from '@/users/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MissionsController } from './missions.controller';
import { MissionsService } from './missions.service';
import { Message, MessageSchema } from './schema/message.schema';
import { Mission, MissionSchema } from './schema/mission.schema';
import { Task, TaskSchema } from './schema/task.schema';
import { Week, WeekSchema } from './schema/week.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
    MongooseModule.forFeature([{ name: Week.name, schema: WeekSchema }]),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: Mission.name, schema: MissionSchema }]),
  ],
  controllers: [MissionsController],
  providers: [MissionsService],
  exports: [MongooseModule],
})
export class MissionsModule {}
