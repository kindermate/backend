"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
exports.PartOptions = {
    parent: menu_1.menu.test,
    properties: {
        _id: { isVisible: false },
        code: {
            position: 1,
            availableValues: [...testCode],
        },
        areaCode: { position: 2 },
        title: { position: 3 },
        subTitle: { position: 4 },
        description: { position: 5 },
    },
};
//# sourceMappingURL=part.option.js.map