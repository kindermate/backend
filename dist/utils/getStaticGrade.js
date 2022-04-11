"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticGradePBT = exports.getStaticGradeMAT = exports.getStaticGradeCTT = void 0;
function getStaticGradeCTT(grade) {
    let y1;
    let y2;
    switch (grade) {
        case 'H':
            y1 = 60;
            y2 = 90;
            break;
        case 'N':
            y1 = 45;
            y2 = 60;
            break;
        case 'L':
            y1 = 30;
            y2 = 45;
            break;
    }
    return [y1, y2];
}
exports.getStaticGradeCTT = getStaticGradeCTT;
function getStaticGradeMAT(grade) {
    let y1;
    let y2;
    switch (grade) {
        case 'VH':
            y1 = 65;
            y2 = 90;
            break;
        case 'H':
            y1 = 60;
            y2 = 65;
            break;
        case 'NH':
            y1 = 55;
            y2 = 60;
            break;
        case 'N':
            y1 = 45;
            y2 = 55;
            break;
        case 'NL':
            y1 = 40;
            y2 = 45;
            break;
        case 'L':
            y1 = 35;
            y2 = 40;
            break;
        case 'VL':
            y1 = 30;
            y2 = 35;
            break;
    }
    return [y1, y2];
}
exports.getStaticGradeMAT = getStaticGradeMAT;
function getStaticGradePBT(grade) {
    let y1;
    let y2;
    switch (grade) {
        case 'VH':
            y1 = 65;
            y2 = 90;
            break;
        case 'H':
            y1 = 60;
            y2 = 65;
            break;
        case 'N':
            y1 = 40;
            y2 = 60;
            break;
        case 'L':
            y1 = 35;
            y2 = 40;
            break;
        case 'VL':
            y1 = 30;
            y2 = 35;
            break;
    }
    return [y1, y2];
}
exports.getStaticGradePBT = getStaticGradePBT;
//# sourceMappingURL=getStaticGrade.js.map