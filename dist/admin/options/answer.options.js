"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerOptions = void 0;
const menu_1 = require("./menu");
exports.AnswerOptions = {
    parent: menu_1.menu.test,
    properties: {
        answers: {
            isVisible: {
                list: false,
                show: true,
            },
        },
    },
    sort: {
        sortBy: 'createdAt',
        direction: 'desc',
    },
};
//# sourceMappingURL=answer.options.js.map