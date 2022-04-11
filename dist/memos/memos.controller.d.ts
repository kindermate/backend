import { MemoCreateDto } from './dto/memo.create.dto';
import { MemoUpdateDto } from './dto/memo.update.dto';
import { MemosService } from './memos.service';
export declare class MemosController {
    private readonly memosService;
    constructor(memosService: MemosService);
    getMemoOne(id: string): Promise<import("./schema/memo.schema").Memo>;
    updateMemo(body: MemoUpdateDto): Promise<import("./schema/memo.schema").Memo>;
    deleteMemo(id: string): Promise<import("./schema/memo.schema").Memo>;
    getMemosOfMission(query: object): Promise<import("./schema/memo.schema").Memo[]>;
    createMemo(body: MemoCreateDto): Promise<import("./schema/memo.schema").Memo>;
}
