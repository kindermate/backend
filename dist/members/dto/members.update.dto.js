"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const member_schema_1 = require("../member.schema");
class MemberUpdateDto extends (0, swagger_1.PickType)(member_schema_1.Member, [
    'id',
    'name',
]) {
}
exports.MemberUpdateDto = MemberUpdateDto;
//# sourceMappingURL=members.update.dto.js.map