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
exports.MembersService = void 0;
const mission_schema_1 = require("../missions/schema/mission.schema");
const result_schema_1 = require("../results/schema/result.schema");
const answer_schema_1 = require("../tests/schema/answer.schema");
const users_repository_1 = require("../users/users.repository");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const member_schema_1 = require("./member.schema");
let MembersService = class MembersService {
    constructor(membersModel, usersRepository, answersModel, resultsModel, missionsModel) {
        this.membersModel = membersModel;
        this.usersRepository = usersRepository;
        this.answersModel = answersModel;
        this.resultsModel = resultsModel;
        this.missionsModel = missionsModel;
    }
    async getMembers(id) {
        const user = await this.usersRepository.findUserByIdWithoutPassword(id);
        const members = await this.membersModel.find({ parent: user._id });
        return members;
    }
    async updateMember(body) {
        const { id, name } = body;
        return await this.membersModel.findByIdAndUpdate(id, { name }, { new: true });
    }
    async deleteMember(id) {
        const member = await this.membersModel.findById(id);
        await this.answersModel.deleteMany({ owner: member._id });
        await this.resultsModel.deleteMany({ owner: member._id });
        await this.missionsModel.deleteMany({ owner: member._id });
        return await this.membersModel.findByIdAndDelete(id);
    }
    async createMember(payload) {
        const { parent, name, birth, gender } = payload;
        const parentUser = await this.usersRepository.findUserByIdWithoutPassword(parent);
        const avatarNumber = Math.floor(Math.random() * 10);
        return await this.membersModel.create({
            parent: parentUser._id,
            name,
            birth,
            gender,
            avatar: avatarNumber,
        });
    }
};
MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(member_schema_1.Member.name)),
    __param(2, (0, mongoose_1.InjectModel)(answer_schema_1.Answer.name)),
    __param(3, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(4, (0, mongoose_1.InjectModel)(mission_schema_1.Mission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_repository_1.UsersRepository,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map