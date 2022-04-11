import { MemberCreateDto } from './dto/members.create.dto';
import { MemberUpdateDto } from './dto/members.update.dto';
import { MembersService } from './members.service';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    getMembers(id: string): Promise<import("./member.schema").Member[]>;
    updateMember(body: MemberUpdateDto): Promise<import("./member.schema").Member>;
    deleteMember(id: string): Promise<import("./member.schema").Member>;
    createMember(body: MemberCreateDto): Promise<import("./member.schema").Member>;
}
