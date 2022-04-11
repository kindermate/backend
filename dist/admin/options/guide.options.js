"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuideOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
exports.GuideOptions = {
    parent: menu_1.menu.result,
    properties: {
        _id: { position: 1 },
        code: { position: 2, availableValues: [...testCode] },
        extraGrade: { position: 3 },
        content: { position: 4, type: 'richtext' },
        createdAt: { position: 5, isVisible: { show: false } },
        updatedAt: { isVisible: false },
    },
    sort: {
        sortBy: 'createdAt',
        direction: 'desc',
    },
};
//# sourceMappingURL=guide.options.js.map