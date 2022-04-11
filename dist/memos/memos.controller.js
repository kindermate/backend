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
exports.MemosController = void 0;
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const common_1 = require("@nestjs/common");
const memo_create_dto_1 = require("./dto/memo.create.dto");
const memo_update_dto_1 = require("./dto/memo.update.dto");
const memos_service_1 = require("./memos.service");
let MemosController = class MemosController {
    constructor(memosService) {
        this.memosService = memosService;
    }
    async getMemoOne(id) {
        return await this.memosService.getMemoOne(id);
    }
    async updateMemo(body) {
        return await this.memosService.updateMemo(body);
    }
    async deleteMemo(id) {
        return await this.memosService.deleteMemo(id);
    }
    async getMemosOfMission(query) {
        return await this.memosService.getMemosOfMission(query);
    }
    async createMemo(body) {
        return await this.memosService.createMemo(body);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemosController.prototype, "getMemoOne", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [memo_update_dto_1.MemoUpdateDto]),
    __metadata("design:returntype", Promise)
], MemosController.prototype, "updateMemo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemosController.prototype, "deleteMemo", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemosController.prototype, "getMemosOfMission", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [memo_create_dto_1.MemoCreateDto]),
    __metadata("design:returntype", Promise)
], MemosController.prototype, "createMemo", null);
MemosController = __decorate([
    (0, common_1.Controller)('memos'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [memos_service_1.MemosService])
], MemosController);
exports.MemosController = MemosController;
//# sourceMappingURL=memos.controller.js.map