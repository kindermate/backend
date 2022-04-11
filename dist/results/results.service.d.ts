import { Member } from '@/members/member.schema';
import { User } from '@/users/user.schema';
import { Model } from 'mongoose';
import { Result } from './schema/result.schema';
import { Commentary } from './schema/commentary.schema';
import { Extra } from './schema/extra.schema';
export declare class ResultsService {
    private readonly resultModel;
    private readonly memberModel;
    private readonly userModel;
    private readonly commentaryModel;
    private readonly extraModel;
    constructor(resultModel: Model<Result>, memberModel: Model<Member>, userModel: Model<User>, commentaryModel: Model<Commentary>, extraModel: Model<Extra>);
    getResultAll(id: string): Promise<Member[]>;
    getCommentary(query: string): Promise<{
        CTT: {};
        MAT: {};
        PBT: {};
        EXTRA: {};
    }>;
}
