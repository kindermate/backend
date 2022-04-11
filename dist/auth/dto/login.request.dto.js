"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestDto = void 0;
const user_schema_1 = require("../../users/user.schema");
const swagger_1 = require("@nestjs/swagger");
class LoginRequestDto extends (0, swagger_1.PickType)(user_schema_1.User, [
    'username',
    'password',
]) {
}
exports.LoginRequestDto = LoginRequestDto;
//# sourceMappingURL=login.request.dto.js.map