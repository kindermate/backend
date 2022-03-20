import { Mission } from '@/missions/schema/mission.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemoCreateDto } from './dto/memo.create.dto';
import { Memo } from './schema/memo.schema';

@Injectable()
export class MemosService {
  constructor(
    @InjectModel(Memo.name)
    private readonly memoModel: Model<Memo>,
    @InjectModel(Mission.name)
    private readonly missionModel: Model<Mission>,
  ) {}

  async getMemo(id) {
    const mission = await this.missionModel.findById(id);
    const memo = await this.memoModel.find({ mission: mission.id });
    return memo;
  }

  async createMemo(body: MemoCreateDto) {
    const memo = await this.memoModel.create(body);
    return memo;
  }
}
