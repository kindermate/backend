import { Member } from '@/members/member.schema';
declare const MemberCreateDto_base: import("@nestjs/common").Type<Pick<Member, "name" | "parent" | "birth" | "gender">>;
export declare class MemberCreateDto extends MemberCreateDto_base {
}
export {};
