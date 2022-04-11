"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
function numberOfMonth(birth) {
    const d = new Date();
    const today = moment(d);
    return today.diff(birth, 'months');
}
exports.default = numberOfMonth;
//# sourceMappingURL=numberOfMonth.js.map