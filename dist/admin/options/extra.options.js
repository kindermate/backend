"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
exports.ExtraOptions = {
    parent: menu_1.menu.result,
    properties: {
        _id: { isVisible: false },
        code: {
            position: 1,
            availableValues: [...testCode],
        },
        status: { position: 2 },
        title: { position: 3 },
        content: { position: 4 },
    },
};
//# sourceMappingURL=extra.options.js.map