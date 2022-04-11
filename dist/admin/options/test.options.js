"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
exports.TestOptions = {
    parent: menu_1.menu.test,
    properties: {
        _id: { isVisible: false },
        code: {
            position: 1,
            availableValues: [...testCode],
        },
        title: { position: 2 },
        subTitle: { position: 3 },
        description: { type: 'textarea', position: 4 },
        notice: { type: 'textarea', position: 5 },
    },
};
//# sourceMappingURL=test.options.js.map