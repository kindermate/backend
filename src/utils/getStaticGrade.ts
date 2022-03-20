export function getStaticGradeCTT(grade: string | number): number[] {
  let y1: number;
  let y2: number;
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

export function getStaticGradeMAT(grade: string | number): number[] {
  let y1: number;
  let y2: number;
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

export function getStaticGradePBT(grade: string | number): number[] {
  let y1: number;
  let y2: number;
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
