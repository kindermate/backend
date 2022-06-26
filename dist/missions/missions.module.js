"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionsModule = void 0;
const member_schema_1 = require("../members/member.schema");
const rating_schema_1 = require("../ratings/schema/rating.schema");
const user_schema_1 = require("../users/user.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const missions_controller_1 = require("./missions.controller");
const missions_service_1 = require("./missions.service");
const message_schema_1 = require("./schema/message.schema");
const mission_schema_1 = require("./schema/mission.schema");
const task_schema_1 = require("./schema/task.schema");
const week_schema_1 = require("./schema/week.schema");
let MissionsModule = class MissionsModule {
};
MissionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: member_schema_1.Member.name, schema: member_schema_1.MemberSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: week_schema_1.Week.name, schema: week_schema_1.WeekSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: task_schema_1.Task.name, schema: task_schema_1.TaskSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: message_schema_1.Message.name, schema: message_schema_1.MessageSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: mission_schema_1.Mission.name, schema: mission_schema_1.MissionSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: rating_schema_1.Rating.name, schema: rating_schema_1.RatingSchema }]),
        ],
        controllers: [missions_controller_1.MissionsController, missions_controller_1.MissionController],
        providers: [missions_service_1.MissionsService],
        exports: [mongoose_1.MongooseModule],
    })
], MissionsModule);
exports.MissionsModule = MissionsModule;
//# sourceMappingURL=missions.module.js.map