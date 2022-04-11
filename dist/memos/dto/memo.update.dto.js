"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const memo_schema_1 = require("../schema/memo.schema");
class MemoUpdateDto extends (0, swagger_1.PickType)(memo_schema_1.Memo, ['id', 'content']) {
}
exports.MemoUpdateDto = MemoUpdateDto;
//# sourceMappingURL=memo.update.dto.js.map