"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const adminjs_1 = require("adminjs");
const AdminJSMongoose = require("@adminjs/mongoose");
const nestjs_1 = require("@adminjs/nestjs");
const users_module_1 = require("../users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../users/user.schema");
const members_module_1 = require("../members/members.module");
const member_schema_1 = require("../members/member.schema");
const posts_module_1 = require("../posts/posts.module");
const post_schema_1 = require("../posts/schema/post.schema");
const tests_module_1 = require("../tests/tests.module");
const test_schema_1 = require("../tests/schema/test.schema");
const question_schema_1 = require("../tests/schema/question.schema");
const user_options_1 = require("./options/user.options");
const member_options_1 = require("./options/member.options");
const part_schema_1 = require("../tests/schema/part.schema");
const post_options_1 = require("./options/post.options");
const test_options_1 = require("./options/test.options");
const question_option_1 = require("./options/question.option");
const part_option_1 = require("./options/part.option");
const answer_schema_1 = require("../tests/schema/answer.schema");
const answer_options_1 = require("./options/answer.options");
const results_module_1 = require("../results/results.module");
const result_schema_1 = require("../results/schema/result.schema");
const result_options_1 = require("./options/result.options");
const commentary_schema_1 = require("../results/schema/commentary.schema");
const commentary_options_1 = require("./options/commentary.options");
const extra_schema_1 = require("../results/schema/extra.schema");
const extra_options_1 = require("./options/extra.options");
const missions_module_1 = require("../missions/missions.module");
const week_schema_1 = require("../missions/schema/week.schema");
const week_options_1 = require("./options/week.options");
const task_schema_1 = require("../missions/schema/task.schema");
const task_options_1 = require("./options/task.options");
const message_schema_1 = require("../missions/schema/message.schema");
const message_options_1 = require("./options/message.options");
const mission_schema_1 = require("../missions/schema/mission.schema");
const mission_options_1 = require("./options/mission.options");
const guide_schema_1 = require("../guides/schema/guide.schema");
const guide_options_1 = require("./options/guide.options");
const guides_module_1 = require("../guides/guides.module");
const simple_tests_module_1 = require("../simple-tests/simple-tests.module");
const simpleTest_schema_1 = require("../simple-tests/schema/simpleTest.schema");
const simpleTestAnswer_schema_1 = require("../simple-tests/schema/simpleTestAnswer.schema");
const simpleTestQuestion_schema_1 = require("../simple-tests/schema/simpleTestQuestion.schema");
const simpleTestResult_schema_1 = require("../simple-tests/schema/simpleTestResult.schema");
const simpleTestResultComment_schema_1 = require("../simple-tests/schema/simpleTestResultComment.schema");
const simpleTest_options_1 = require("./options/simpleTest.options");
const simpleTestAnswer_options_1 = require("./options/simpleTestAnswer.options");
const simpleTestQuestion_options_1 = require("./options/simpleTestQuestion.options");
const simpleTestResult_options_1 = require("./options/simpleTestResult.options");
const simpleTestResultComment_options_1 = require("./options/simpleTestResultComment.options");
const page_schema_1 = require("../posts/schema/page.schema");
const page_options_1 = require("./options/page.options");
adminjs_1.default.registerAdapter(AdminJSMongoose);
const ADMIN = {
    email: 'test',
    password: '1111',
};
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_1.AdminModule.createAdminAsync({
                imports: [
                    users_module_1.UsersModule,
                    members_module_1.MembersModule,
                    posts_module_1.PostsModule,
                    tests_module_1.TestsModule,
                    results_module_1.ResultsModule,
                    missions_module_1.MissionsModule,
                    guides_module_1.GuidesModule,
                    simple_tests_module_1.SimpleTestsModule,
                ],
                inject: [
                    (0, mongoose_1.getModelToken)(user_schema_1.User.name),
                    (0, mongoose_1.getModelToken)(member_schema_1.Member.name),
                    (0, mongoose_1.getModelToken)(post_schema_1.Post.name),
                    (0, mongoose_1.getModelToken)(page_schema_1.Page.name),
                    (0, mongoose_1.getModelToken)(test_schema_1.Test.name),
                    (0, mongoose_1.getModelToken)(question_schema_1.Question.name),
                    (0, mongoose_1.getModelToken)(part_schema_1.Part.name),
                    (0, mongoose_1.getModelToken)(answer_schema_1.Answer.name),
                    (0, mongoose_1.getModelToken)(result_schema_1.Result.name),
                    (0, mongoose_1.getModelToken)(commentary_schema_1.Commentary.name),
                    (0, mongoose_1.getModelToken)(extra_schema_1.Extra.name),
                    (0, mongoose_1.getModelToken)(week_schema_1.Week.name),
                    (0, mongoose_1.getModelToken)(task_schema_1.Task.name),
                    (0, mongoose_1.getModelToken)(message_schema_1.Message.name),
                    (0, mongoose_1.getModelToken)(mission_schema_1.Mission.name),
                    (0, mongoose_1.getModelToken)(guide_schema_1.Guide.name),
                    (0, mongoose_1.getModelToken)(simpleTest_schema_1.SimpleTest.name),
                    (0, mongoose_1.getModelToken)(simpleTestAnswer_schema_1.SimpleTestAnswer.name),
                    (0, mongoose_1.getModelToken)(simpleTestQuestion_schema_1.SimpleTestQuestion.name),
                    (0, mongoose_1.getModelToken)(simpleTestResult_schema_1.SimpleTestResult.name),
                    (0, mongoose_1.getModelToken)(simpleTestResultComment_schema_1.SimpleTestResultComment.name),
                ],
                useFactory: (userModel, memberModel, postModel, pageModel, testModel, questionModel, partModel, answerModel, resultModel, commentaryModel, extraModel, weekModel, taskModel, messageModel, missionModel, guideModel, simpleTestModel, simpleTestAnswerModel, simpleTestQuestionModel, simpleTestResultModel, simpleTestResultCommentModel) => ({
                    adminJsOptions: {
                        rootPath: '/admin',
                        resources: [
                            { resource: userModel, options: user_options_1.UserOptions },
                            { resource: memberModel, options: member_options_1.MemberOptions },
                            { resource: postModel, options: post_options_1.PostOptions },
                            { resource: pageModel, options: page_options_1.PageOptions },
                            { resource: testModel, options: test_options_1.TestOptions },
                            { resource: questionModel, options: question_option_1.QuestionOptions },
                            { resource: partModel, options: part_option_1.PartOptions },
                            { resource: answerModel, options: answer_options_1.AnswerOptions },
                            { resource: resultModel, options: result_options_1.ResultOptions },
                            { resource: commentaryModel, options: commentary_options_1.CommentaryOptions },
                            { resource: extraModel, options: extra_options_1.ExtraOptions },
                            { resource: weekModel, options: week_options_1.WeekOptions },
                            { resource: taskModel, options: task_options_1.TaskOptions },
                            { resource: messageModel, options: message_options_1.MessageOptions },
                            { resource: missionModel, options: mission_options_1.MissionOptions },
                            { resource: guideModel, options: guide_options_1.GuideOptions },
                            { resource: simpleTestModel, options: simpleTest_options_1.SimpleTestOptions },
                            {
                                resource: simpleTestAnswerModel,
                                options: simpleTestAnswer_options_1.SimpleTestAnswerOptions,
                            },
                            {
                                resource: simpleTestQuestionModel,
                                options: simpleTestQuestion_options_1.SimpleTestQuestionOptions,
                            },
                            {
                                resource: simpleTestResultModel,
                                options: simpleTestResult_options_1.SimpleTestResultOptions,
                            },
                            {
                                resource: simpleTestResultCommentModel,
                                options: simpleTestResultComment_options_1.SimpleTestResultCommentOptions,
                            },
                        ],
                        locale: {
                            language: 'en',
                            translations: {
                                labels: {
                                    loginWelcome: '???????????????',
                                    User: '??????',
                                    Member: '?????? ?????????',
                                    Post: '?????????',
                                    Page: '?????????',
                                    Test: '??????',
                                    Question: '??????',
                                    Part: '????????????',
                                    Answer: '??????',
                                    Result: '??????',
                                    Commentary: '????????????',
                                    Extra: '????????????',
                                    Week: '??????',
                                    Task: '????????????',
                                    Message: '?????????',
                                    Mission: '??????',
                                    Guide: '?????????',
                                    SimpleTest: '??????',
                                    SimpleTestAnswer: '??????',
                                    SimpleTestQuestion: '??????',
                                    SimpleTestResult: '??????',
                                    SimpleTestResultComment: '?????? ??????',
                                },
                                messages: {
                                    loginWelcome: '??????????????? - ??????????????? ????????? ??????????????????.',
                                },
                            },
                        },
                        branding: {
                            companyName: 'KinderMate',
                            logo: false,
                        },
                    },
                    auth: {
                        cookieName: 'kindermate',
                        cookiePassword: 'kindermate',
                        authenticate: async (email, password) => {
                            if (ADMIN.password === password && ADMIN.email === email) {
                                return ADMIN;
                            }
                            return null;
                        },
                    },
                }),
            }),
        ],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map