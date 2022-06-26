import { Model, Types } from 'mongoose';
import { Mission } from './schema/mission.schema';
import { User } from '@/users/user.schema';
import { Member } from '@/members/member.schema';
import { Week } from './schema/week.schema';
import { Rating } from '../ratings/schema/rating.schema';
import { Message } from './schema/message.schema';
export declare class MissionsService {
    private readonly missionModel;
    private readonly userModel;
    private readonly memberModel;
    private readonly weekModel;
    private readonly ratingModel;
    private readonly messageModel;
    constructor(missionModel: Model<Mission>, userModel: Model<User>, memberModel: Model<Member>, weekModel: Model<Week>, ratingModel: Model<Rating>, messageModel: Model<Message>);
    addStartDate(): Promise<void>;
    getMission(id: string): Promise<Mission>;
    finishMission(id: string): Promise<string>;
    getMessageWithScore(score: number): Promise<Message>;
    getMessageForClosing(score: number): Promise<any>;
    getRecentMissions(id: string | Types.ObjectId): Promise<Member[]>;
    getMembersWithMissions(id: string): Promise<Member[]>;
    updateMissionWeek(id: string): Promise<Mission>;
    handleMissionWeek(member: any): Promise<void>;
    missionComplete(id: string): Promise<Mission>;
    getMissionSet(query: object): Promise<{
        code: string;
        name: string;
        week: number;
        part: number;
    }>;
}
