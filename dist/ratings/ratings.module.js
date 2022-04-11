"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsModule = void 0;
const common_1 = require("@nestjs/common");
const ratings_service_1 = require("./ratings.service");
const ratings_controller_1 = require("./ratings.controller");
const mongoose_1 = require("@nestjs/mongoose");
const rating_schema_1 = require("./schema/rating.schema");
const mission_schema_1 = require("../missions/schema/mission.schema");
let RatingsModule = class RatingsModule {
};
RatingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: rating_schema_1.Rating.name, schema: rating_schema_1.RatingSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: mission_schema_1.Mission.name, schema: mission_schema_1.MissionSchema }]),
        ],
        providers: [ratings_service_1.RatingsService],
        controllers: [ratings_controller_1.RatingsController],
    })
], RatingsModule);
exports.RatingsModule = RatingsModule;
//# sourceMappingURL=ratings.module.js.map