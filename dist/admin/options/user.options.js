"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOptions = void 0;
const menu_1 = require("./menu");
const adminjs_1 = require("adminjs");
exports.UserOptions = {
    parent: menu_1.menu.user,
    actions: {
        new: { isVisible: false },
        download: {
            icon: 'View',
            actionType: 'resource',
            component: adminjs_1.default.bundle('../components/DownloadUsers.jsx'),
        },
    },
    properties: {
        username: { position: 1 },
        nickname: { position: 2 },
        email: { position: 3 },
        password: { isVisible: false },
        birth: { position: 4 },
        gender: { position: 5 },
        address1: { position: 6 },
        address2: { position: 7 },
        type: { position: 8 },
        findOut: { position: 9 },
        createdAt: { position: 10 },
        updatedAt: { position: 11 },
    },
    sort: {
        sortBy: 'createdAt',
        direction: 'desc',
    },
};
//# sourceMappingURL=user.options.js.map