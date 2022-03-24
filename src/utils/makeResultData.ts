import { HttpException } from '@nestjs/common';
import {
  calculateKTW,
  calculateRW,
  calculateZW,
  calulateTW,
} from './calculateScore';
import {
  getExtraStatusCTT,
  getExtraStatusMAT,
  getExtraStatusPBT,
} from './getExtraStatus';
import numberOfMonth from './numberOfMonth';
import { ratingGrade } from './ratingGrade';

export default function makeResultData(birth, gender, answers) {
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

  // 해당 멤버의 개월수 나이 계산
  const monthAge = numberOfMonth(birth);
  if (monthAge > 120) {
    throw new HttpException('They are not of the appropriate age.', 400);
  }
  // RW 계산
  const RW = calculateRW(answers);
  // ZW 계산
  const ZW = calculateZW(RW, monthAge, gender);
  // TW 계산
  const TW = calulateTW(ZW);
  // console.log('TW', TW);
  // KTW 계산
  const KTW = calculateKTW(TW, monthAge, gender);
  // console.log(KTW);

  // 기질 계산: KTW 필요
  const extraCTT = getExtraStatusCTT(KTW['CTT']);
  // console.log('extra CTT', extraCTT);

  // 적성 강약 계산: TW 필요
  const extraMAT = getExtraStatusMAT(TW['MAT']);
  // console.log('extra MAT', extraMAT);

  // 양육행동경항 계산: KTW 필요(KTW01, KTW02)
  const extraPBT = getExtraStatusPBT(KTW['PBT']);
  console.log('extra PBT', extraPBT);

  // 등급 계산 KTW
  const grade = ratingGrade(KTW);
  // console.log('grade', grade);

  // result 생성
  // TW
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
  // grade
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

  // extra
  result[0]['extra'] = extraCTT;
  result[1]['extra'] = extraMAT;
  result[2]['extra'] = extraPBT;

  return result;
}
