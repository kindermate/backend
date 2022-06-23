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
exports.PagesController = exports.PostsController = void 0;
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const common_1 = require("@nestjs/common");
const post_create_dto_1 = require("./dto/post.create.dto");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    async getAllPosts(query) {
        return this.postsService.getAllPost(query);
    }
    async getPost(id) {
        return this.postsService.getPost(id);
    }
    async createPost(body) {
        return this.postsService.createPost(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPost", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_create_dto_1.PostCreateDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPost", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
let PagesController = class PagesController {
    constructor(pagesService) {
        this.pagesService = pagesService;
    }
    async getPage(id) {
        console.log(id);
        return this.pagesService.getPage(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "getPage", null);
PagesController = __decorate([
    (0, common_1.Controller)('pages'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [posts_service_1.PagesService])
], PagesController);
exports.PagesController = PagesController;
//# sourceMappingURL=posts.controller.js.map