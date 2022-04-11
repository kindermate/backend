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
exports.ExtraContoller = exports.CommentaryController = exports.ResultsController = void 0;
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const common_1 = require("@nestjs/common");
const results_service_1 = require("./results.service");
let ResultsController = class ResultsController {
    constructor(resultsService) {
        this.resultsService = resultsService;
    }
    async getResultAll(id) {
        return this.resultsService.getResultAll(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "getResultAll", null);
ResultsController = __decorate([
    (0, common_1.Controller)('results'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [results_service_1.ResultsService])
], ResultsController);
exports.ResultsController = ResultsController;
let CommentaryController = class CommentaryController {
    constructor(resultsService) {
        this.resultsService = resultsService;
    }
    async getCommentary(query) {
        return await this.resultsService.getCommentary(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentaryController.prototype, "getCommentary", null);
CommentaryController = __decorate([
    (0, common_1.Controller)('commentary'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [results_service_1.ResultsService])
], CommentaryController);
exports.CommentaryController = CommentaryController;
let ExtraContoller = class ExtraContoller {
    constructor(resultsService) {
        this.resultsService = resultsService;
    }
    async getExtra(query) {
        console.log(query);
        return '';
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExtraContoller.prototype, "getExtra", null);
ExtraContoller = __decorate([
    (0, common_1.Controller)('extra'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [results_service_1.ResultsService])
], ExtraContoller);
exports.ExtraContoller = ExtraContoller;
//# sourceMappingURL=results.controller.js.map