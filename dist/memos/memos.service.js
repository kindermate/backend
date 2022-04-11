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
exports.MemosService = void 0;
const mission_schema_1 = require("../missions/schema/mission.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const memo_schema_1 = require("./schema/memo.schema");
let MemosService = class MemosService {
    constructor(memoModel, missionModel) {
        this.memoModel = memoModel;
        this.missionModel = missionModel;
    }
    async getMemoOne(id) {
        return await this.memoModel.findById(id);
    }
    async updateMemo(body) {
        const { id, content } = body;
        const memo = await this.memoModel.findByIdAndUpdate(id, {
            content: content,
        });
        return memo;
    }
    async deleteMemo(id) {
        return await this.memoModel.findByIdAndDelete(id);
    }
    async getMemosOfMission(query) {
        const id = query['mission'];
        const mission = await this.missionModel.findById(id);
        const memo = await this.memoModel.find({
            mission: mission.id,
            week: query['week'],
        });
        return memo;
    }
    async createMemo(memoData) {
        const memo = await this.memoModel.create(memoData);
        return memo;
    }
};
MemosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(memo_schema_1.Memo.name)),
    __param(1, (0, mongoose_1.InjectModel)(mission_schema_1.Mission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], MemosService);
exports.MemosService = MemosService;
//# sourceMappingURL=memos.service.js.map