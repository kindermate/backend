"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageOptions = void 0;
const menu_1 = require("./menu");
exports.MessageOptions = {
    parent: menu_1.menu.mission,
    properties: {
        message: { position: 1, type: 'textarea' },
        score: { position: 2 },
        min: { position: 3 },
        max: { position: 4 },
        isClosing: { position: 5 },
    },
};
//# sourceMappingURL=message.options.js.map