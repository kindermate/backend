import { Mission } from '@/missions/schema/mission.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemoCreateDto } from './dto/memo.create.dto';
import { MemoUpdateDto } from './dto/memo.update.dto';
import { Memo } from './schema/memo.schema';

@Injectable()
export class MemosService {
  constructor(
    @InjectModel(Memo.name)
    private readonly memoModel: Model<Memo>,
    @InjectModel(Mission.name)
    private readonly missionModel: Model<Mission>,
  ) {}

  async getMemoOne(id: string) {
    return await this.memoModel.findById(id);
  }

  async updateMemo(body: MemoUpdateDto) {
    const { id, content } = body;
    const memo = await this.memoModel.findByIdAndUpdate(id, {
      content: content,
    });
    return memo;
  }

  async deleteMemo(id: string) {
    return await this.memoModel.findByIdAndDelete(id);
  }

  async getMemosOfMission(query: object) {
    const id = query['mission'];
    const mission = await this.missionModel.findById(id);
    const memo = await this.memoModel.find({ mission: mission.id });
    return memo;
  }

  async createMemo(body: MemoCreateDto) {
    const memo = await this.memoModel.create(body);
    return memo;
  }
}
