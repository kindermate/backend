import { MissionsService } from './missions.service';
export declare class MissionsController {
    private readonly missionService;
    constructor(missionService: MissionsService);
    getRecentMission(id: string): Promise<import("../members/member.schema").Member[]>;
    getMessageWithScore(score: number): Promise<import("./schema/message.schema").Message>;
    updateMissionWeek(id: string): Promise<import("./schema/mission.schema").Mission>;
    getMissionSet(query: object): Promise<{
        code: string;
        name: string;
        week: number;
        part: number;
    }>;
    getMembersWithMissions(id: string): Promise<import("../members/member.schema").Member[]>;
    missionComplete(id: string): Promise<import("./schema/mission.schema").Mission>;
}
