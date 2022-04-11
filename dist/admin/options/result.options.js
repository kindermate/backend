"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultOptions = void 0;
const menu_1 = require("./menu");
exports.ResultOptions = {
    parent: menu_1.menu.result,
    properties: {
        _id: { position: 1 },
        owner: { position: 2, isId: true },
        results: { position: 3 },
        createdAt: { position: 4 },
        updatedAt: { position: 5 },
    },
    sort: {
        sortBy: 'createdAt',
        direction: 'desc',
    },
};
//# sourceMappingURL=result.options.js.map