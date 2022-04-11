"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const answer_schema_1 = require("../schema/answer.schema");
class AnswerCreateDto extends (0, swagger_1.PickType)(answer_schema_1.Answer, [
    'owner',
    'answers',
]) {
}
exports.AnswerCreateDto = AnswerCreateDto;
//# sourceMappingURL=answer.create.dto.js.map