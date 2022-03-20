import { PickType } from '@nestjs/swagger';
import { Answer } from '../schema/answer.schema';

export class AnswerCreateDto extends PickType(Answer, [
  'owner',
  'answers',
] as const) {}
