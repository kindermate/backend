import { Member } from '@/members/member.schema';
declare const MemberCreateDto_base: import("@nestjs/common").Type<Pick<Member, "birth" | "gender" | "name" | "parent">>;
export declare class MemberCreateDto extends MemberCreateDto_base {
}
export {};
