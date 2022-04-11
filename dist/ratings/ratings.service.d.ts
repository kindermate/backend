import { Mission } from '@/missions/schema/mission.schema';
import { Model } from 'mongoose';
import { Rating } from './schema/rating.schema';
export declare class RatingsService {
    private readonly ratingModel;
    private readonly missionModel;
    constructor(ratingModel: Model<Rating>, missionModel: Model<Mission>);
    getRating(query: object): Promise<Rating>;
    saveRating(value: object): Promise<Rating>;
}
