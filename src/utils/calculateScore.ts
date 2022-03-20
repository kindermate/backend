import {
  getGradeLimitCTT,
  getGradeLimitMAT,
  getGradeLimitPBT,
} from './getGradeLimit';
import {
  getStaticGradeCTT,
  getStaticGradeMAT,
  getStaticGradePBT,
} from './getStaticGrade';
import {
  getVariablesCTT,
  getVariablesMAT,
  getVariablesPBT,
} from './getVariableZW';
import inverse from './inverse';

// RW(원점수)계산
export function calculateRW(answers: object): object {
  const scoreRW = {};
  for (const [k, v] of Object.entries(answers)) {
    if (k === 'CTT') {
      const RW01 = v[6] + v[20] + inverse(k, v[18]) + inverse(k, v[23]);
      const RW02 = v[7] + inverse(k, v[8]) + inverse(k, v[15]);
      const RW03 = v[3] + v[10] + v[22] + inverse(k, v[17]) + inverse(k, v[24]);
      const RW04 = v[4] + v[5] + v[12] + v[14];
      const RW05 = v[2] + v[16] + v[19] + v[21];
      const RW06 = v[1] + v[9] + v[11] + v[13] + inverse(k, v[0]);
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
      const RW04 =
        inverse(k, v[4]) +
        inverse(k, v[9]) +
        inverse(k, v[14]) +
        inverse(k, v[16]) +
        inverse(k, v[19]);
      scoreRW[k] = [RW01, RW02, RW03, RW04];
    }
  }
  return scoreRW;
}

// ZW(표준점수)계산 : 기질 결정에 필요
export function calculateZW(rw: object, month: number, gender: string): object {
  const scoreZW = {};
  for (const [k, v] of Object.entries(rw)) {
    if (k === 'CTT') {
      const scores = [];
      v.forEach((rw, index) => {
        const variables = getVariablesCTT(month, gender, index + 1);
        console.log(variables);
        const zw = (rw - variables[0]) / variables[1];
        scores.push(zw);
      });
      scoreZW[k] = scores;
    }
    if (k === 'MAT') {
      const scores = [];
      v.forEach((rw, index) => {
        const variables = getVariablesMAT(month, gender, index + 1);
        const zw = (rw - variables[0]) / variables[1];
        scores.push(zw);
      });
      scoreZW[k] = scores;
    }
    if (k === 'PBT') {
      const scores = [];
      v.forEach((rw, index) => {
        const variables = getVariablesPBT(month, gender, index + 1);
        const zw = (rw - variables[0]) / variables[1];
        scores.push(zw);
      });
      scoreZW[k] = scores;
    }
  }
  return scoreZW;
}

// T(T점수)계산 : 수준 결정에 필요
export function calulateTW(zw: object): object {
  const scoreTW = {};
  for (const [k, v] of Object.entries(zw)) {
    const scores = [];
    v.forEach((value: number) => {
      scores.push(value * 10 + 50);
    });
    scoreTW[k] = scores;
  }
  return scoreTW;
}

// KTW 계산
export function calculateKTW(
  tw: object,
  month: number,
  gender: string,
): object {
  const scoreKTW = {};
  for (const [k, v] of Object.entries(tw)) {
    console.log(k, v);
    const scores = [];
    v.forEach((value: number, index: number) => {
      if (k === 'CTT') {
        const limit = getGradeLimitCTT(value, month, gender, index + 1);
        const x1 = limit[0];
        const x2 = limit[1];
        const y = getStaticGradeCTT(limit[2]);
        const y1 = y[0];
        const y2 = y[1];
        const ktw = y1 + ((y2 - y1) / (x2 - x1)) * (value - x1);
        // console.log(x1, x2, y1, y2, value);
        // console.log(parseFloat(ktw.toFixed(2)));
        scores.push(ktw);
      }
      if (k === 'MAT') {
        const limit = getGradeLimitMAT(value, month, gender, index + 1);
        const x1 = limit[0];
        const x2 = limit[1];
        const y = getStaticGradeMAT(limit[2]);
        const y1 = y[0];
        const y2 = y[1];
        const ktw = y1 + ((y2 - y1) / (x2 - x1)) * (value - x1);
        // console.log(x1, x2, y1, y2, value);
        // console.log(parseFloat(ktw.toFixed(2)));
        scores.push(ktw);
      }
      if (k === 'PBT') {
        console.log(value, month, gender, index + 1);
        const limit = getGradeLimitPBT(value, month, gender, index + 1);
        console.log(limit);
        const x1 = limit[0];
        const x2 = limit[1];
        const y = getStaticGradePBT(limit[2]);
        const y1 = y[0];
        const y2 = y[1];
        const ktw = y1 + ((y2 - y1) / (x2 - x1)) * (value - x1);
        // console.log(x1, x2, y1, y2, value);
        // console.log(parseFloat(ktw.toFixed(2)));
        scores.push(ktw);
      }
      scoreKTW[k] = scores;
    });
  }
  console.log(scoreKTW);
  return scoreKTW;
}
