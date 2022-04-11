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
exports.TestsService = void 0;
const member_schema_1 = require("../members/member.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const answer_schema_1 = require("./schema/answer.schema");
const question_schema_1 = require("./schema/question.schema");
const test_schema_1 = require("./schema/test.schema");
const makeResultData_1 = require("../utils/makeResultData");
const result_schema_1 = require("../results/schema/result.schema");
const mission_schema_1 = require("../missions/schema/mission.schema");
let TestsService = class TestsService {
    constructor(questionModel, testModel, answerModel, memberModel, resultModel, missionModel) {
        this.questionModel = questionModel;
        this.testModel = testModel;
        this.answerModel = answerModel;
        this.memberModel = memberModel;
        this.resultModel = resultModel;
        this.missionModel = missionModel;
    }
    async getTest(code) {
        const test = await this.testModel.findOne({ code: code });
        return test;
    }
    async getAllQuestion(code) {
        const questions = await this.questionModel.find({ code: code });
        return questions;
    }
    async createAnswer(body) {
        const member = await this.memberModel.findById({
            _id: body.owner,
        });
        const _id = member._id;
        const birth = member.birth;
        const gender = member.gender;
        const results = (0, makeResultData_1.default)(birth, gender, body.answers);
        const createdResult = new this.resultModel({
            owner: _id,
            results,
        });
        await createdResult.save();
        const mission = new this.missionModel({
            owner: _id,
            result: createdResult._id,
            week: 1,
            isComplete: false,
            startDate: new Date(),
        });
        await mission.save();
        const answer = await this.answerModel.create({
            owner: _id,
            answers: body.answers,
        });
        member.hasActiveMission = true;
        await member.save();
        return answer;
    }
};
TestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(question_schema_1.Question.name)),
    __param(1, (0, mongoose_1.InjectModel)(test_schema_1.Test.name)),
    __param(2, (0, mongoose_1.InjectModel)(answer_schema_1.Answer.name)),
    __param(3, (0, mongoose_1.InjectModel)(member_schema_1.Member.name)),
    __param(4, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(5, (0, mongoose_1.InjectModel)(mission_schema_1.Mission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], TestsService);
exports.TestsService = TestsService;
//# sourceMappingURL=tests.service.js.map