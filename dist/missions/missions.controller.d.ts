import { MissionsService } from './missions.service';
export declare class MissionController {
    private readonly missionService;
    constructor(missionService: MissionsService);
    getMission(id: string): Promise<import("./schema/mission.schema").Mission>;
    finishMission(id: string): Promise<string>;
}
export declare class MissionsController {
    private readonly missionService;
    constructor(missionService: MissionsService);
    getRecentMission(id: string): Promise<import("../members/member.schema").Member[]>;
    getMessageForFinish(score: number): Promise<any>;
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
