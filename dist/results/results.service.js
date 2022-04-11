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
exports.ResultsService = void 0;
const member_schema_1 = require("../members/member.schema");
const user_schema_1 = require("../users/user.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const result_schema_1 = require("./schema/result.schema");
const commentary_schema_1 = require("./schema/commentary.schema");
const extra_schema_1 = require("./schema/extra.schema");
let ResultsService = class ResultsService {
    constructor(resultModel, memberModel, userModel, commentaryModel, extraModel) {
        this.resultModel = resultModel;
        this.memberModel = memberModel;
        this.userModel = userModel;
        this.commentaryModel = commentaryModel;
        this.extraModel = extraModel;
    }
    async getResultAll(id) {
        const user = await this.userModel.findById(id);
        const members = await this.memberModel
            .find({ parent: user._id })
            .populate({ path: 'results', options: { sort: { createdAt: -1 } } });
        return members;
    }
    async getCommentary(query) {
        const result = {
            CTT: {},
            MAT: {},
            PBT: {},
            EXTRA: {},
        };
        const cttArray = query['CTT'].split(',');
        await Promise.all(cttArray.map(async (grade, index) => {
            const data = await this.commentaryModel.findOne({
                code: 'CTT',
                part: index + 1,
                grade: grade,
            });
            result['CTT'][index] = data.content;
        }));
        const matArray = query['MAT'].split(',');
        await Promise.all(matArray.map(async (grade, index) => {
            const data = await this.commentaryModel.findOne({
                code: 'MAT',
                part: index + 1,
                grade: grade,
            });
            result['MAT'][index] = data.content;
        }));
        const pbtArray = query['PBT'].split(',');
        await Promise.all(pbtArray.map(async (grade, index) => {
            const data = await this.commentaryModel.findOne({
                code: 'PBT',
                part: index + 1,
                grade: grade,
            });
            result['PBT'][index] = data.content;
        }));
        const extraArray = query['EXTRA'].split(',');
        const extraCTT = await this.extraModel.findOne({
            code: 'CTT',
            status: extraArray[0],
        });
        const extraPBT = await this.extraModel.findOne({
            code: 'PBT',
            status: extraArray[1],
        });
        result['EXTRA'][0] = { title: extraCTT.title, content: extraCTT.content };
        result['EXTRA'][1] = { title: extraPBT.title, content: extraPBT.content };
        return result;
    }
};
ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(1, (0, mongoose_1.InjectModel)(member_schema_1.Member.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(3, (0, mongoose_1.InjectModel)(commentary_schema_1.Commentary.name)),
    __param(4, (0, mongoose_1.InjectModel)(extra_schema_1.Extra.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ResultsService);
exports.ResultsService = ResultsService;
//# sourceMappingURL=results.service.js.map