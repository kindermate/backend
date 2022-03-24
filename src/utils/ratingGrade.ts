export function ratingGrade(ktw: object): object {
  const ratedGrade = {};
  for (const [k, v] of Object.entries(ktw)) {
    if (k === 'CTT') {
      const grades = [];
      v.forEach((v: number) => {
        // 소숫점 자리 버림
        const value = Math.round(v * 10) / 10;
        console.log(value);
        if (value >= 27 && value <= 45) grades.push('L');
        else if (value >= 45 && value <= 60) grades.push('N');
        // else if (value >= 60 && value <= 90) grades.push('H');
        else if (value >= 60) grades.push('H');
      });
      ratedGrade[k] = grades;
    }
    if (k === 'MAT') {
      const grades = [];
      v.forEach((v: number) => {
        const value = Math.round(v * 10) / 10;
        console.log(value);
        if (value >= 28 && value < 35) grades.push('VL');
        else if (value >= 35 && value <= 40) grades.push('L');
        else if (value >= 40 && value <= 45) grades.push('NL');
        else if (value >= 45 && value <= 55) grades.push('N');
        else if (value >= 55 && value <= 60) grades.push('NH');
        else if (value >= 60 && value <= 65) grades.push('H');
        // else if (value >= 65 && value <= 90) grades.push('VH');
        else if (value >= 65) grades.push('VH');
      });
      ratedGrade[k] = grades;
    }
    if (k === 'PBT') {
      const grades = [];
      v.forEach((v: number) => {
        const value = Math.round(v);
        // console.log(value);
        if (value >= 29 && value < 35) grades.push('VL');
        else if (value >= 35 && value <= 40) grades.push('L');
        else if (value >= 40 && value <= 60) grades.push('N');
        else if (value >= 60 && value <= 65) grades.push('H');
        // else if (value >= 65 && value <= 90) grades.push('VH');
        else if (value >= 65) grades.push('VH');
      });
      ratedGrade[k] = grades;
    }
  }
  console.log('ratedGrade', ratedGrade);
  return ratedGrade;
}
