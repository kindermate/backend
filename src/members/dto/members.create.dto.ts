import { PickType } from '@nestjs/swagger';
import { Member } from '@/members/member.schema';

export class MemberCreateDto extends PickType(Member, [
  'parent',
  'name',
  'birth',
  'gender',
] as const) {}
