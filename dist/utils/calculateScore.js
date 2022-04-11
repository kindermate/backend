"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateKTW = exports.calulateTW = exports.calculateZW = exports.calculateRW = void 0;
const getGradeLimit_1 = require("./getGradeLimit");
const getStaticGrade_1 = require("./getStaticGrade");
const getVariableZW_1 = require("./getVariableZW");
const inverse_1 = require("./inverse");
function calculateRW(answers) {
    const scoreRW = {};
    for (const [k, v] of Object.entries(answers)) {
        if (k === 'CTT') {
            const RW01 = v[6] + v[20] + (0, inverse_1.default)(k, v[18]) + (0, inverse_1.default)(k, v[23]);
            const RW02 = v[7] + (0, inverse_1.default)(k, v[8]) + (0, inverse_1.default)(k, v[15]);
            const RW03 = v[3] + v[10] + v[22] + (0, inverse_1.default)(k, v[17]) + (0, inverse_1.default)(k, v[24]);
            const RW04 = v[4] + v[5] + v[12] + v[14];
            const RW05 = v[2] + v[16] + v[19] + v[21];
            const RW06 = v[1] + v[9] + v[11] + v[13] + (0, inverse_1.default)(k, v[0]);
            scoreRW[k] = [RW01, RW02, RW03, RW04, RW05, RW06];
        }
        if (k === 'MAT') {
            const RW01 = v[4] + v[10] + v[20] + v[21];
            const RW02 = v[12] + v[17] + v[28] + v[30];
            const RW03 = v[5] + v[6] + v[18] + v[33] + v[34];
            const RW04 = v[2] + v[7] + v[13] + v[19];
            const RW05 = v[0] + v[11] + v[15] + v[16] + v[25] + v[26];
            const RW06 = v[1] + v[14] + v[23] + v[24];
            const RW07 = v[3] + v[8] + v[29] + v[31];
            const RW08 = v[9] + v[22] + v[27] + v[32];
            scoreRW[k] = [RW01, RW02, RW03, RW04, RW05, RW06, RW07, RW08];
        }
        if (k === 'PBT') {
            const RW01 = v[1] + v[3] + v[6] + v[8] + v[10] + v[17];
            const RW02 = v[2] + v[5] + v[7] + v[12] + v[15];
            const RW03 = v[0] + v[11] + v[13] + v[18];
            const RW04 = (0, inverse_1.default)(k, v[4]) +
                (0, inverse_1.default)(k, v[9]) +
                (0, inverse_1.default)(k, v[14]) +
                (0, inverse_1.default)(k, v[16]) +
                (0, inverse_1.default)(k, v[19]);
            scoreRW[k] = [RW01, RW02, RW03, RW04];
        }
    }
    return scoreRW;
}
exports.calculateRW = calculateRW;
function calculateZW(rw, month, gender) {
    const scoreZW = {};
    for (const [k, v] of Object.entries(rw)) {
        if (k === 'CTT') {
            const scores = [];
            v.forEach((rw, index) => {
                const variables = (0, getVariableZW_1.getVariablesCTT)(month, gender, index + 1);
                const zw = (rw - variables[0]) / variables[1];
                scores.push(zw);
            });
            scoreZW[k] = scores;
        }
        if (k === 'MAT') {
            const scores = [];
            v.forEach((rw, index) => {
                const variables = (0, getVariableZW_1.getVariablesMAT)(month, gender, index + 1);
                const zw = (rw - variables[0]) / variables[1];
                scores.push(zw);
            });
            scoreZW[k] = scores;
        }
        if (k === 'PBT') {
            const scores = [];
            v.forEach((rw, index) => {
                const variables = (0, getVariableZW_1.getVariablesPBT)(month, gender, index + 1);
                const zw = (rw - variables[0]) / variables[1];
                scores.push(zw);
            });
            scoreZW[k] = scores;
        }
    }
    return scoreZW;
}
exports.calculateZW = calculateZW;
function calulateTW(zw) {
    const scoreTW = {};
    for (const [k, v] of Object.entries(zw)) {
        const scores = [];
        v.forEach((value) => {
            scores.push(value * 10 + 50);
        });
        scoreTW[k] = scores;
    }
    return scoreTW;
}
exports.calulateTW = calulateTW;
function calculateKTW(tw, month, gender) {
    const scoreKTW = {};
    for (const [k, v] of Object.entries(tw)) {
        const scores = [];
        v.forEach((value, index) => {
            if (k === 'CTT') {
                const limit = (0, getGradeLimit_1.getGradeLimitCTT)(Math.floor(value), month, gender, index + 1);
                const x1 = limit[0];
                const x2 = limit[1];
                const y = (0, getStaticGrade_1.getStaticGradeCTT)(limit[2]);
                const y1 = y[0];
                const y2 = y[1];
                const ktw = y1 + ((y2 - y1) / (x2 - x1)) * (Math.floor(value) - x1);
                scores.push(ktw);
            }
            if (k === 'MAT') {
                const limit = (0, getGradeLimit_1.getGradeLimitMAT)(Math.floor(value), month, gender, index + 1);
                const x1 = limit[0];
                const x2 = limit[1];
                const y = (0, getStaticGrade_1.getStaticGradeMAT)(limit[2]);
                const y1 = y[0];
                const y2 = y[1];
                const ktw = y1 + ((y2 - y1) / (x2 - x1)) * (Math.floor(value) - x1);
                scores.push(ktw);
            }
            if (k === 'PBT') {
                const limit = (0, getGradeLimit_1.getGradeLimitPBT)(Math.floor(value), month, gender, index + 1);
                const x1 = limit[0];
                const x2 = limit[1];
                const y = (0, getStaticGrade_1.getStaticGradePBT)(limit[2]);
                const y1 = y[0];
                const y2 = y[1];
                const ktw = y1 + ((y2 - y1) / (x2 - x1)) * (Math.floor(value) - x1);
                scores.push(ktw);
            }
            scoreKTW[k] = scores;
        });
    }
    return scoreKTW;
}
exports.calculateKTW = calculateKTW;
//# sourceMappingURL=calculateScore.js.map