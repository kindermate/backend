import { Member } from '@/members/member.schema';
import { Model } from 'mongoose';
import { AnswerCreateDto } from './dto/answer.create.dto';
import { Answer } from './schema/answer.schema';
import { Question } from './schema/question.schema';
import { Test } from './schema/test.schema';
import { Result } from '@/results/schema/result.schema';
import { Mission } from '@/missions/schema/mission.schema';
export declare class TestsService {
    private readonly questionModel;
    private readonly testModel;
    private readonly answerModel;
    private readonly memberModel;
    private readonly resultModel;
    private readonly missionModel;
    constructor(questionModel: Model<Question>, testModel: Model<Test>, answerModel: Model<Answer>, memberModel: Model<Member>, resultModel: Model<Result>, missionModel: Model<Mission>);
    getTest(code: string): Promise<Test>;
    getAllQuestion(code: string): Promise<Question[]>;
    createAnswer(body: AnswerCreateDto): Promise<Answer>;
}
