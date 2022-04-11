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
exports.GuidesController = void 0;
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const common_1 = require("@nestjs/common");
const guides_service_1 = require("./guides.service");
let GuidesController = class GuidesController {
    constructor(guidesService) {
        this.guidesService = guidesService;
    }
    async getGuides(query) {
        console.log(query);
        return this.guidesService.getGuides(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GuidesController.prototype, "getGuides", null);
GuidesController = __decorate([
    (0, common_1.Controller)('guides'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [guides_service_1.GuidesService])
], GuidesController);
exports.GuidesController = GuidesController;
//# sourceMappingURL=guides.controller.js.map