import { Model } from 'mongoose';
import { Guide } from './schema/guide.schema';
export declare class GuidesService {
    private readonly guideModel;
    constructor(guideModel: Model<Guide>);
    getGuides(query: object): Promise<{
        CTT: Guide;
        PBT: Guide;
    }>;
}
