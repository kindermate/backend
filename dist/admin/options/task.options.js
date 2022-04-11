"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskOptions = void 0;
const menu_1 = require("./menu");
const testCode = [
    { value: 'CTT', label: 'CTT' },
    { value: 'MAT', label: 'MAT' },
    { value: 'PBT', label: 'PBT' },
];
const term = [
    { value: 'D', label: 'Default' },
    { value: '1', label: '1 Day' },
    { value: '2', label: '2 Days' },
    { value: '3', label: '3 Days' },
    { value: 'E', label: 'Everyday' },
    { value: 'O', label: 'Options' },
];
exports.TaskOptions = {
    parent: menu_1.menu.mission,
    properties: {
        _id: { position: 1 },
        code: {
            position: 2,
            availableValues: [...testCode],
        },
        part: { position: 3 },
        term: { position: 4, availableValues: [...term] },
        title: { position: 5 },
        description: {
            position: 6,
            isVisible: { list: false, show: true, edit: true },
        },
        infant: {
            position: 7,
            type: 'textarea',
            isVisible: { list: false, show: true, edit: true },
        },
        student: {
            position: 8,
            type: 'textarea',
            isVisible: { list: false, show: true, edit: true },
        },
        tags: { position: 9 },
        createdAt: { position: 10, isVisible: { show: false } },
        updatedAt: { isVisible: false },
    },
    sort: {
        sortBy: 'createdAt',
        direction: 'desc',
    },
};
//# sourceMappingURL=task.options.js.map