import { Mission } from '@/missions/schema/mission.schema';
import { Model, Types } from 'mongoose';
import { MemoCreateDto } from './dto/memo.create.dto';
import { MemoUpdateDto } from './dto/memo.update.dto';
import { Memo } from './schema/memo.schema';
export declare class MemosService {
    private readonly memoModel;
    private readonly missionModel;
    constructor(memoModel: Model<Memo>, missionModel: Model<Mission>);
    getMemoOne(id: string | Types.ObjectId): Promise<Memo>;
    updateMemo(body: MemoUpdateDto): Promise<Memo>;
    deleteMemo(id: string): Promise<Memo>;
    getMemosOfMission(query: object): Promise<Memo[]>;
    createMemo(memoData: MemoCreateDto): Promise<Memo>;
}
