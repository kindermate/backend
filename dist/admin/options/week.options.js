"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
exports.WeekOptions = {
    parent: menu_1.menu.mission,
    properties: {
        _id: { isVisible: false },
        code: {
            position: 1,
            availableValues: [...testCode],
        },
        name: { position: 2 },
        week: { position: 3 },
        part: { position: 4 },
    },
};
//# sourceMappingURL=week.options.js.map