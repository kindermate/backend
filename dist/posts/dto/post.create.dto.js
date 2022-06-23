"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const post_schema_1 = require("../schema/post.schema");
class PostCreateDto extends (0, swagger_1.PickType)(post_schema_1.Post, [
    'title',
    'content',
    'thumbnail',
    'startDate',
    'endDate',
    'isPublic',
    'isNotice',
]) {
}
exports.PostCreateDto = PostCreateDto;
//# sourceMappingURL=post.create.dto.js.map