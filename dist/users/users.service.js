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
exports.UsersService = void 0;
const nodemailer = require("nodemailer");
const aws = require("@aws-sdk/client-ses");
const bcrypt = require("bcrypt");
const ejs = require("ejs");
const crypto = require("crypto");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(usersRepository, userModel) {
        this.usersRepository = usersRepository;
        this.userModel = userModel;
    }
    async getAllUsers() {
        const users = this.usersRepository.getAllUsers();
        return users;
    }
    async getUsersForExcel() {
        return await this.usersRepository.getUsersForExcel();
    }
    async signUp(body) {
        const { username, nickname, email, password, birth, gender, address1, address2, type, findOut, } = body;
        const isUserExist = await this.usersRepository.existByEmail(email);
        if (isUserExist) {
            throw new common_1.UnauthorizedException('Email already exists.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.usersRepository.create({
            username,
            nickname,
            email,
            password: hashedPassword,
            birth,
            gender,
            address1,
            address2,
            type,
            findOut,
        });
        return user.readOnlyData;
    }
    async duplicateCheckUsername(username) {
        const result = await this.userModel.exists({ username });
        if (result) {
            throw new common_1.UnauthorizedException('Username already exists.');
        }
        return 'Username is available.';
    }
    async updateUser(id, userData) {
        const user = await this.userModel.findByIdAndUpdate(id, userData, {
            new: true,
        });
        return user.readOnlyData;
    }
    async changePassword(id, data) {
        const { password } = data;
        console.log(id, password);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.findByIdAndUpdate(id, {
            password: hashedPassword,
        }, { new: true });
        return user.readOnlyData;
    }
    async findUsernameWithEmail(email) {
        const user = await this.userModel.findOne({ email: email });
        if (!user) {
            throw new common_1.UnauthorizedException('해당 이메일로 가입한 내역이 존재하지 않습니다.');
        }
        const ses = new aws.SES({
            apiVersion: '2010-12-01',
            region: process.env.AWS_REGION_ID,
        });
        const mailer = nodemailer.createTransport({
            SES: { ses, aws },
        });
        let template;
        ejs.renderFile('src/utils/emails/findUsername.ejs', { username: user.username }, (err, data) => {
            if (err) {
                console.log(err);
            }
            template = data;
        });
        await mailer.sendMail({
            from: '킨더메이트 <no-reply@kindermate.io>',
            to: email,
            subject: '[킨더메이트] 아이디 찾기 결과입니다.',
            html: template,
        });
        return { message: `${email}로 가입 시 입력하신 아이디를 보내드렸습니다.` };
    }
    async resetPasswordWithEmail(email) {
        const user = await this.userModel.findOne({ email: email });
        const tempPassword = crypto.randomBytes(3).toString('hex');
        const hashedPassword = await bcrypt.hash(tempPassword, 10);
        if (user) {
            user.password = hashedPassword;
            await user.save();
        }
        else {
            throw new common_1.UnauthorizedException('해당 이메일로 가입한 내역이 존재하지 않습니다.');
        }
        const ses = new aws.SES({
            apiVersion: '2010-12-01',
            region: process.env.AWS_REGION_ID,
        });
        const mailer = nodemailer.createTransport({
            SES: { ses, aws },
        });
        let template;
        ejs.renderFile('src/utils/emails/resetPassword.ejs', { password: tempPassword }, (err, data) => {
            if (err) {
                console.log(err);
            }
            template = data;
        });
        await mailer.sendMail({
            from: '킨더메이트 <no-reply@kindermate.io>',
            to: email,
            subject: '[킨더메이트] 임시 비밀번호를 보내드립니다.',
            html: template,
        });
        return { message: `${email}로 임시 비밀번호를 보내드렸습니다.` };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map