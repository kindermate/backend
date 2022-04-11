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
exports.MissionSchema = exports.Mission = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
};
let Mission = class Mission extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: 'Member',
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Mission.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: 'Result',
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Mission.prototype, "result", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Mission.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Mission.prototype, "week", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Mission.prototype, "isComplete", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Mission.prototype, "isFinished", void 0);
Mission = __decorate([
    (0, mongoose_1.Schema)(options)
], Mission);
exports.Mission = Mission;
exports.MissionSchema = mongoose_1.SchemaFactory.createForClass(Mission);
//# sourceMappingURL=mission.schema.js.map