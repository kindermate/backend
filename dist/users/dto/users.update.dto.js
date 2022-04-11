"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const users_request_dto_1 = require("./users.request.dto");
class UserUpdateDto extends (0, mapped_types_1.PartialType)(users_request_dto_1.UserRequestDto) {
}
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=users.update.dto.js.map