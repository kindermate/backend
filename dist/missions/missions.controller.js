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
exports.MissionsController = void 0;
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const common_1 = require("@nestjs/common");
const missions_service_1 = require("./missions.service");
let MissionsController = class MissionsController {
    constructor(missionService) {
        this.missionService = missionService;
    }
    async getRecentMission(id) {
        return await this.missionService.getRecentMissions(id);
    }
    async getMessageWithScore(score) {
        return await this.missionService.getMessageWithScore(score);
    }
    async updateMissionWeek(id) {
        return await this.missionService.updateMissionWeek(id);
    }
    async getMissionSet(query) {
        return await this.missionService.getMissionSet(query);
    }
    async getMembersWithMissions(id) {
        return await this.missionService.getMembersWithMissions(id);
    }
    async missionComplete(id) {
        return await this.missionService.missionComplete(id);
    }
};
__decorate([
    (0, common_1.Get)('recent/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MissionsController.prototype, "getRecentMission", null);
__decorate([
    (0, common_1.Get)('message/:score'),
    __param(0, (0, common_1.Param)('score')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MissionsController.prototype, "getMessageWithScore", null);
__decorate([
    (0, common_1.Put)('next/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MissionsController.prototype, "updateMissionWeek", null);
__decorate([
    (0, common_1.Get)('weeks'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MissionsController.prototype, "getMissionSet", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MissionsController.prototype, "getMembersWithMissions", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MissionsController.prototype, "missionComplete", null);
MissionsController = __decorate([
    (0, common_1.Controller)('missions'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [missions_service_1.MissionsService])
], MissionsController);
exports.MissionsController = MissionsController;
//# sourceMappingURL=missions.controller.js.map