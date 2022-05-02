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
exports.MissionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mission_schema_1 = require("./schema/mission.schema");
const user_schema_1 = require("../users/user.schema");
const member_schema_1 = require("../members/member.schema");
const week_schema_1 = require("./schema/week.schema");
const rating_schema_1 = require("../ratings/schema/rating.schema");
const moment = require("moment");
const message_schema_1 = require("./schema/message.schema");
let MissionsService = class MissionsService {
    constructor(missionModel, userModel, memberModel, weekModel, ratingModel, messageModel) {
        this.missionModel = missionModel;
        this.userModel = userModel;
        this.memberModel = memberModel;
        this.weekModel = weekModel;
        this.ratingModel = ratingModel;
        this.messageModel = messageModel;
    }
    async addStartDate() {
        const missions = await this.missionModel.find({});
        missions.forEach(async (mission) => {
            console.log(mission['createdAt']);
            mission.startDate = mission['createdAt'];
            await mission.save();
        });
    }
    async getMessageWithScore(score) {
        const message = await this.messageModel.findOne({ score: score });
        return message;
    }
    async getRecentMissions(id) {
        const user = await this.userModel.findById(id);
        const members = await this.memberModel
            .find({
            parent: user._id,
            hasActiveMission: true,
        })
            .populate({
            path: 'missions',
            options: { sort: { createdAt: -1 } },
        });
        return members;
    }
    async getMembersWithMissions(id) {
        const user = await this.userModel.findById(id);
        const finalMembers = await this.memberModel
            .find({ parent: user._id }, { avatar: 1, birth: 1, gender: 1, name: 1 })
            .populate({
            path: 'missions',
            options: { sort: { createdAt: -1 } },
            populate: { path: 'result', select: 'results' },
        });
        return finalMembers;
    }
    async updateMissionWeek(id) {
        const mission = await this.missionModel.findById(id);
        const today = moment(new Date());
        const diff = today.diff(mission.startDate, 'weeks');
        if (diff > 0) {
            mission.week = mission.week + diff;
            mission.startDate = moment(mission.startDate).add(7, 'days').toDate();
            await mission.save();
        }
        return mission;
    }
    async handleMissionWeek(member) {
        const mission = await this.missionModel.findOne({ owner: member._id });
        if (mission) {
            const d = new Date();
            const today = moment(d);
            const missionStartedDate = mission['createdAt'];
            const diff = today.diff(missionStartedDate, 'weeks');
            if (mission.isComplete) {
                mission.week = diff + 1;
                mission.isComplete = false;
                mission.save();
            }
        }
    }
    async missionComplete(id) {
        const mission = await this.missionModel.findById(id);
        if (mission) {
            mission.isComplete = true;
            await mission.save();
        }
        return mission;
    }
    async getMissionSet(query) {
        const week = query['week'];
        const grade = query['grade'];
        const code = query['code'];
        const missionSet = await this.weekModel
            .findOne({ code: code, week: week })
            .populate('tasksHigh', 'title description tags term infant student')
            .populate('tasksNormal', 'title description tags term infant student')
            .populate('tasksLow', 'title description tags term infant student');
        const mission = {
            code: missionSet.code,
            name: missionSet.name,
            week: missionSet.week,
            part: missionSet.part,
        };
        if (grade === 'VH' || grade === 'H') {
            mission['tasks'] = missionSet.tasksHigh;
        }
        else if (grade === 'NH' || grade === 'N' || grade === 'NL') {
            mission['tasks'] = missionSet.tasksNormal;
        }
        else if (grade === 'L' || grade === 'VL') {
            mission['tasks'] = missionSet.tasksLow;
        }
        return mission;
    }
};
MissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(mission_schema_1.Mission.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(member_schema_1.Member.name)),
    __param(3, (0, mongoose_1.InjectModel)(week_schema_1.Week.name)),
    __param(4, (0, mongoose_1.InjectModel)(rating_schema_1.Rating.name)),
    __param(5, (0, mongoose_1.InjectModel)(message_schema_1.Message.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MissionsService);
exports.MissionsService = MissionsService;
//# sourceMappingURL=missions.service.js.map