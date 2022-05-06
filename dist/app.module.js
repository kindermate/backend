"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const members_module_1 = require("./members/members.module");
const admin_module_1 = require("./admin/admin.module");
const posts_module_1 = require("./posts/posts.module");
const tests_module_1 = require("./tests/tests.module");
const results_module_1 = require("./results/results.module");
const missions_module_1 = require("./missions/missions.module");
const memos_module_1 = require("./memos/memos.module");
const ratings_module_1 = require("./ratings/ratings.module");
const guides_module_1 = require("./guides/guides.module");
const simple_tests_module_1 = require("./simple-tests/simple-tests.module");
const mongoose = require("mongoose");
let AppModule = class AppModule {
    constructor() {
        this.isDev = process.env.MODE === 'dev' ? true : false;
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
        mongoose.set('debug', this.isDev);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            members_module_1.MembersModule,
            admin_module_1.AdminModule,
            posts_module_1.PostsModule,
            tests_module_1.TestsModule,
            results_module_1.ResultsModule,
            missions_module_1.MissionsModule,
            memos_module_1.MemosModule,
            ratings_module_1.RatingsModule,
            guides_module_1.GuidesModule,
            simple_tests_module_1.SimpleTestsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map