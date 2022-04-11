"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestsModule = void 0;
const common_1 = require("@nestjs/common");
const tests_service_1 = require("./tests.service");
const tests_controller_1 = require("./tests.controller");
const test_schema_1 = require("./schema/test.schema");
const mongoose_1 = require("@nestjs/mongoose");
const question_schema_1 = require("./schema/question.schema");
const part_schema_1 = require("./schema/part.schema");
const answer_schema_1 = require("./schema/answer.schema");
const member_schema_1 = require("../members/member.schema");
const result_schema_1 = require("../results/schema/result.schema");
const mission_schema_1 = require("../missions/schema/mission.schema");
let TestsModule = class TestsModule {
};
TestsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: test_schema_1.Test.name, schema: test_schema_1.TestSchema },
                { name: question_schema_1.Question.name, schema: question_schema_1.QuestionSchema },
                { name: part_schema_1.Part.name, schema: part_schema_1.PartSchema },
                { name: answer_schema_1.Answer.name, schema: answer_schema_1.AnswerSchema },
                { name: member_schema_1.Member.name, schema: member_schema_1.MemberSchema },
                { name: result_schema_1.Result.name, schema: result_schema_1.ResultSchema },
                { name: mission_schema_1.Mission.name, schema: mission_schema_1.MissionSchema },
            ]),
        ],
        providers: [tests_service_1.TestsService],
        controllers: [tests_controller_1.TestsController],
        exports: [mongoose_1.MongooseModule],
    })
], TestsModule);
exports.TestsModule = TestsModule;
//# sourceMappingURL=tests.module.js.map