import { PickType } from '@nestjs/swagger';
import { Memo } from '../schema/memo.schema';

export class MemoCreateDto extends PickType(Memo, [
  'mission',
  'content',
] as const) {}
