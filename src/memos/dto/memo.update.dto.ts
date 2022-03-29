import { PickType } from '@nestjs/swagger';
import { Memo } from '../schema/memo.schema';

export class MemoUpdateDto extends PickType(Memo, ['id', 'content'] as const) {}
