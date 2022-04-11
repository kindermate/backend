import { GuidesService } from './guides.service';
export declare class GuidesController {
    private readonly guidesService;
    constructor(guidesService: GuidesService);
    getGuides(query: object): Promise<{
        CTT: import("./schema/guide.schema").Guide;
        PBT: import("./schema/guide.schema").Guide;
    }>;
}
