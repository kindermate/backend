import { ResultsService } from './results.service';
export declare class ResultsController {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    getResultAll(id: string): Promise<import("../members/member.schema").Member[]>;
}
export declare class CommentaryController {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    getCommentary(query: string): Promise<{
        CTT: {};
        MAT: {};
        PBT: {};
        EXTRA: {};
    }>;
}
export declare class ExtraContoller {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    getExtra(query: string): Promise<string>;
}
