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
exports.PagesService = exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const page_schema_1 = require("./schema/page.schema");
const post_schema_1 = require("./schema/post.schema");
let PostsService = class PostsService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async getAllPost(query) {
        const posts = await this.postModel
            .find(query)
            .sort({ isImportant: -1, createdAt: -1 });
        return posts;
    }
    async getPost(id) {
        const post = await this.postModel.findOne({ _id: id });
        return post;
    }
    async createPost(payload) {
        const newPost = new this.postModel(payload);
        return await newPost.save();
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostsService);
exports.PostsService = PostsService;
let PagesService = class PagesService {
    constructor(pageModel) {
        this.pageModel = pageModel;
    }
    async getPage(id) {
        const page = await this.pageModel.findOne({ _id: id });
        return page;
    }
};
PagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(page_schema_1.Page.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PagesService);
exports.PagesService = PagesService;
//# sourceMappingURL=posts.service.js.map