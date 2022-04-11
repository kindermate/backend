"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const calculateScore_1 = require("./calculateScore");
const getExtraStatus_1 = require("./getExtraStatus");
const numberOfMonth_1 = require("./numberOfMonth");
const ratingGrade_1 = require("./ratingGrade");
function makeResultData(birth, gender, answers) {
    const result = [
        {
            test: 'CTT',
            part: [],
        },
        {
            test: 'MAT',
            part: [],
        },
        {
            test: 'PBT',
            part: [],
        },
    ];
    const monthAge = (0, numberOfMonth_1.default)(birth);
    if (monthAge > 120) {
        throw new common_1.HttpException('They are not of the appropriate age.', 400);
    }
    const RW = (0, calculateScore_1.calculateRW)(answers);
    const ZW = (0, calculateScore_1.calculateZW)(RW, monthAge, gender);
    const TW = (0, calculateScore_1.calulateTW)(ZW);
    const KTW = (0, calculateScore_1.calculateKTW)(TW, monthAge, gender);
    const extraCTT = (0, getExtraStatus_1.getExtraStatusCTT)(KTW['CTT']);
    const extraMAT = (0, getExtraStatus_1.getExtraStatusMAT)(TW['MAT']);
    const extraPBT = (0, getExtraStatus_1.getExtraStatusPBT)(KTW['PBT']);
    console.log('extra PBT', extraPBT);
    const grade = (0, ratingGrade_1.ratingGrade)(KTW);
    for (const [k, v] of Object.entries(TW)) {
        if (k === 'CTT') {
            v.forEach((score, index) => {
                result[0].part.push({
                    code: index + 1,
                    score: { TW: parseFloat(score.toFixed(2)) },
                });
            });
        }
        if (k === 'MAT') {
            v.forEach((score, index) => {
                result[1].part.push({
                    code: index + 1,
                    score: { TW: parseFloat(score.toFixed(2)) },
                });
            });
        }
        if (k === 'PBT') {
            v.forEach((score, index) => {
                result[2].part.push({
                    code: index + 1,
                    score: { TW: parseFloat(score.toFixed(2)) },
                });
            });
        }
    }
    for (const [k, v] of Object.entries(grade)) {
        if (k === 'CTT') {
            v.forEach((grade, index) => {
                result[0].part[index].score['grade'] = grade;
            });
        }
        if (k === 'MAT') {
            v.forEach((grade, index) => {
                result[1].part[index].score['grade'] = grade;
            });
        }
        if (k === 'PBT') {
            v.forEach((grade, index) => {
                result[2].part[index].score['grade'] = grade;
            });
        }
    }
    result[0]['extra'] = extraCTT;
    result[1]['extra'] = extraMAT;
    result[2]['extra'] = extraPBT;
    return result;
}
exports.default = makeResultData;
//# sourceMappingURL=makeResultData.js.map