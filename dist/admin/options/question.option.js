"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
exports.QuestionOptions = {
    parent: menu_1.menu.test,
    properties: {
        _id: { isVisible: false },
        code: {
            position: 1,
            availableValues: [...testCode],
        },
        part: { position: 2 },
        order: { position: 3 },
        question: { position: 4 },
        isInverse: { position: 5 },
    },
    sort: {
        sortBy: 'order',
        direction: 'desc',
    },
};
//# sourceMappingURL=question.option.js.map