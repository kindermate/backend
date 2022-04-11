"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersModule = void 0;
const common_1 = require("@nestjs/common");
const members_service_1 = require("./members.service");
const members_controller_1 = require("./members.controller");
const mongoose_1 = require("@nestjs/mongoose");
const member_schema_1 = require("./member.schema");
const users_module_1 = require("../users/users.module");
const answer_schema_1 = require("../tests/schema/answer.schema");
const result_schema_1 = require("../results/schema/result.schema");
const mission_schema_1 = require("../missions/schema/mission.schema");
let MembersModule = class MembersModule {
};
MembersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: member_schema_1.Member.name, schema: member_schema_1.MemberSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: answer_schema_1.Answer.name, schema: answer_schema_1.AnswerSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: result_schema_1.Result.name, schema: result_schema_1.ResultSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: mission_schema_1.Mission.name, schema: mission_schema_1.MissionSchema }]),
            users_module_1.UsersModule,
        ],
        providers: [members_service_1.MembersService],
        controllers: [members_controller_1.MembersController],
        exports: [members_service_1.MembersService, mongoose_1.MongooseModule],
    })
], MembersModule);
exports.MembersModule = MembersModule;
//# sourceMappingURL=members.module.js.map