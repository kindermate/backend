"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const memo_schema_1 = require("../schema/memo.schema");
class MemoCreateDto extends (0, swagger_1.PickType)(memo_schema_1.Memo, [
    'mission',
    'content',
    'week',
]) {
}
exports.MemoCreateDto = MemoCreateDto;
//# sourceMappingURL=memo.create.dto.js.map