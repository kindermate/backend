"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentaryOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
const grade = [
    { value: 'VH', label: 'Very High' },
    { value: 'H', label: 'High' },
    { value: 'NH', label: 'Normal High' },
    { value: 'N', label: 'Normal' },
    { value: 'NL', label: 'Normal Low' },
    { value: 'L', label: 'Low' },
    { value: 'VL', label: 'Very Low' },
];
exports.CommentaryOptions = {
    parent: menu_1.menu.result,
    properties: {
        _id: { isVisible: false },
        code: {
            position: 1,
            availableValues: [...testCode],
        },
        part: { position: 2 },
        grade: { position: 3, availableValues: [...grade] },
        content: { position: 4 },
    },
};
//# sourceMappingURL=commentary.options.js.map