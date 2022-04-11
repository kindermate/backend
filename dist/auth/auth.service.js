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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const users_repository_1 = require("../users/users.repository");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async jwtLogin(data) {
        const { username, password } = data;
        const user = await this.usersRepository.findUserByUsername(username);
        if (!user) {
            throw new common_1.UnauthorizedException('아이디를 확인해주세요.');
        }
        const isPasswordValidated = await bcrypt.compare(password, user.password);
        if (!isPasswordValidated) {
            throw new common_1.UnauthorizedException('비밀번호가 틀렸습니다.');
        }
        const payload = { username: username, sub: user.id };
        return {
            token: this.jwtService.sign(payload, { secret: process.env.SECRET }),
        };
    }
    async checkPassword(data) {
        const { username, password } = data;
        const user = await this.usersRepository.findUserByUsername(username);
        const isPasswordValidated = await bcrypt.compare(password, user.password);
        if (!isPasswordValidated) {
            throw new common_1.UnauthorizedException('비밀번호가 틀렸습니다.');
        }
        return isPasswordValidated;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map