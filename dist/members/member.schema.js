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
exports.MemberSchema = exports.Member = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
    collection: 'members',
};
let Member = class Member extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        required: true,
        ref: 'User',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Member.prototype, "parent", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Member.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Member.prototype, "birth", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Member.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Member.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Member.prototype, "hasActiveMission", void 0);
Member = __decorate([
    (0, mongoose_1.Schema)(options)
], Member);
exports.Member = Member;
const _MemberSchema = mongoose_1.SchemaFactory.createForClass(Member);
_MemberSchema.virtual('results', {
    ref: 'Result',
    localField: '_id',
    foreignField: 'owner',
});
_MemberSchema.virtual('missions', {
    ref: 'Mission',
    localField: '_id',
    foreignField: 'owner',
});
_MemberSchema.set('toObject', { virtuals: true });
_MemberSchema.set('toJSON', { virtuals: true });
exports.MemberSchema = _MemberSchema;
//# sourceMappingURL=member.schema.js.map