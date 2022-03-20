import { Mission, MissionSchema } from '@/missions/schema/mission.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';
import { Memo, MemoSchema } from './schema/memo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Memo.name, schema: MemoSchema }]),
    MongooseModule.forFeature([{ name: Mission.name, schema: MissionSchema }]),
  ],
  controllers: [MemosController],
  providers: [MemosService],
  exports: [MongooseModule],
})
export class MemosModule {}
