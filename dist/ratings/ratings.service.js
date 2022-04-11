"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsService = void 0;
const mission_schema_1 = require("../missions/schema/mission.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rating_schema_1 = require("./schema/rating.schema");
let RatingsService = class RatingsService {
    constructor(ratingModel, missionModel) {
        this.ratingModel = ratingModel;
        this.missionModel = missionModel;
    }
    async getRating(query) {
        const mission = query['mission'];
        const week = query['week'];
        const code = query['code'];
        const existMission = await this.missionModel.findById(mission);
        const rating = await this.ratingModel.findOne({
            mission: existMission._id,
            week,
            code,
        });
        return rating;
    }
    async saveRating(value) {
        const id = value['mission'];
        const week = value['week'];
        const code = value['code'];
        const rating = value['rating'];
        const mission = await this.missionModel.findById(id);
        const existRating = await this.ratingModel.findOne({
            mission: mission._id,
            code,
            week,
        });
        if (!existRating) {
            const newRating = await this.ratingModel.create({
                mission: mission._id,
                code,
                week,
                rating,
            });
            return newRating;
        }
        else {
            existRating.rating = rating;
            await existRating.save();
            return existRating;
        }
    }
};
RatingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(rating_schema_1.Rating.name)),
    __param(1, (0, mongoose_1.InjectModel)(mission_schema_1.Mission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], RatingsService);
exports.RatingsService = RatingsService;
//# sourceMappingURL=ratings.service.js.map