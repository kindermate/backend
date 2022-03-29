import { PickType } from '@nestjs/swagger';
import { Member } from '@/members/member.schema';

export class MemberUpdateDto extends PickType(Member, [
  'id',
  'name',
] as const) {}
