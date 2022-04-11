import { RatingsService } from './ratings.service';
export declare class RatingsController {
    private readonly ratingsService;
    constructor(ratingsService: RatingsService);
    getRating(query: object): Promise<import("./schema/rating.schema").Rating>;
    saveRating(body: object): Promise<import("./schema/rating.schema").Rating>;
}
