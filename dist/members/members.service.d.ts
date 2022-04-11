import { Mission } from '@/missions/schema/mission.schema';
import { Result } from '@/results/schema/result.schema';
import { Answer } from '@/tests/schema/answer.schema';
import { UsersRepository } from '@/users/users.repository';
import { Model } from 'mongoose';
import { MemberCreateDto } from './dto/members.create.dto';
import { MemberUpdateDto } from './dto/members.update.dto';
import { Member } from './member.schema';
export declare class MembersService {
    private readonly membersModel;
    private readonly usersRepository;
    private readonly answersModel;
    private readonly resultsModel;
    private readonly missionsModel;
    constructor(membersModel: Model<Member>, usersRepository: UsersRepository, answersModel: Model<Answer>, resultsModel: Model<Result>, missionsModel: Model<Mission>);
    getMembers(id: string): Promise<Member[]>;
    updateMember(body: MemberUpdateDto): Promise<Member>;
    deleteMember(id: string): Promise<Member>;
    createMember(payload: MemberCreateDto): Promise<Member>;
}
