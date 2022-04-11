"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const member_schema_1 = require("../member.schema");
class MemberCreateDto extends (0, swagger_1.PickType)(member_schema_1.Member, [
    'parent',
    'name',
    'birth',
    'gender',
]) {
}
exports.MemberCreateDto = MemberCreateDto;
//# sourceMappingURL=members.create.dto.js.map