export function getExtraStatusCTT(ktw: number[]) {
  const k1 = ktw[0];
  const k2 = ktw[1];
  const k3 = ktw[2];
  const k4 = ktw[3];
  const k5 = ktw[4];
  const k6 = ktw[5];

  // 이상, 미만
  if (
    k1 >= 30 &&
    k1 < 45 &&
    k2 >= 30 &&
    k2 < 90 &&
    k3 >= 30 &&
    k3 < 90 &&
    k4 >= 60 &&
    k4 < 90 &&
    k5 >= 30 &&
    k5 < 45 &&
    k6 >= 30 &&
    k6 < 90
  ) {
    return 'A';
  } else if (
    k1 >= 60 &&
    k1 < 90 &&
    k2 >= 30 &&
    k2 < 90 &&
    k3 >= 30 &&
    k3 < 90 &&
    k4 >= 30 &&
    k4 < 90 &&
    k5 >= 60 &&
    k5 < 90 &&
    k6 >= 30 &&
    k6 < 90
  ) {
    return 'B';
  } else if (
    k1 >= 30 &&
    k1 < 90 &&
    k2 >= 30 &&
    k2 < 90 &&
    k3 >= 30 &&
    k3 < 45 &&
    k4 >= 30 &&
    k4 < 90 &&
    k5 >= 30 &&
    k5 < 90 &&
    k6 >= 30 &&
    k6 < 45
  ) {
    return 'C';
  } else if (
    k1 >= 45 &&
    k1 < 60 &&
    k2 >= 45 &&
    k2 < 60 &&
    k3 >= 30 &&
    k3 < 90 &&
    k4 >= 45 &&
    k4 < 60 &&
    k5 >= 45 &&
    k5 < 60 &&
    k6 >= 45 &&
    k6 < 60
  ) {
    return 'D';
  } else if (
    k1 >= 45 &&
    k1 < 60 &&
    k2 >= 45 &&
    k2 < 60 &&
    k3 >= 30 &&
    k3 < 90 &&
    k4 >= 30 &&
    k4 < 45 &&
    k5 >= 45 &&
    k5 < 60 &&
    k6 >= 45 &&
    k6 < 60
  ) {
    return 'E';
  } else if (
    k1 >= 30 &&
    k1 < 45 &&
    k2 >= 45 &&
    k2 < 60 &&
    k3 >= 30 &&
    k3 < 90 &&
    k4 >= 45 &&
    k4 < 60 &&
    k5 >= 45 &&
    k5 < 60 &&
    k6 >= 45 &&
    k6 < 60
  ) {
    return 'F';
  } else if (
    k1 >= 30 &&
    k1 < 45 &&
    k2 >= 45 &&
    k2 < 60 &&
    k3 >= 30 &&
    k3 < 90 &&
    k4 >= 45 &&
    k4 < 60 &&
    k5 >= 45 &&
    k5 < 60 &&
    k6 >= 60 &&
    k6 < 90
  ) {
    return 'G';
  } else if (
    k1 >= 45 &&
    k1 < 60 &&
    k2 >= 60 &&
    k2 < 90 &&
    k3 >= 30 &&
    k3 < 90 &&
    k4 >= 45 &&
    k4 < 60 &&
    k5 >= 45 &&
    k5 < 60 &&
    k6 >= 45 &&
    k6 < 60
  ) {
    return 'H';
  } else {
    return 'I';
  }
}

export function getExtraStatusMAT(tw: number[]): object {
  const strongs = [];
  const weaks = [];
  tw.forEach((score, index) => {
    if (score >= 60) {
      strongs.push(index);
    } else if (score < 40) {
      weaks.push(index);
    }
  });
  return { strongs, weaks };
}

export function getExtraStatusPBT(ktw: number[]) {
  const k1 = Math.round(ktw[0]);
  const k2 = Math.round(ktw[1]);
  console.log(k1, k2);
  if (k1 >= 30 && k1 < 35) {
    if (k2 < 35) {
      return 'A1';
    } else if (k2 >= 35 && k2 < 40) {
      return 'A2';
    } else if (k2 >= 40 && k2 < 60) {
      return 'I1';
    } else if (k2 >= 60 && k2 < 65) {
      return 'B2';
    } else if (k2 >= 65 && k2 <= 90) {
      return 'B1';
    }
  } else if (k1 >= 35 && k1 < 40) {
    if (k2 < 35) {
      return 'A3';
    } else if (k2 >= 35 && k2 < 40) {
      return 'A4';
    } else if (k2 >= 40 && k2 < 60) {
      return 'I2';
    } else if (k2 >= 60 && k2 < 65) {
      return 'B3';
    } else if (k2 >= 65 && k2 <= 90) {
      return 'B4';
    }
  } else if (k1 >= 40 && k1 < 60) {
    if (k2 < 35) {
      return 'G1';
    } else if (k2 >= 35 && k2 < 40) {
      return 'G2';
    } else if (k2 >= 40 && k2 < 60) {
      return 'C';
    } else if (k2 >= 60 && k2 < 65) {
      return 'H2';
    } else if (k2 >= 65 && k2 <= 90) {
      return 'H1';
    }
  } else if (k1 >= 60 && k1 < 65) {
    if (k2 < 35) {
      return 'E2';
    } else if (k2 >= 35 && k2 < 40) {
      return 'E3';
    } else if (k2 >= 40 && k2 < 60) {
      return 'F2';
    } else if (k2 >= 60 && k2 < 65) {
      return 'D2';
    } else if (k2 >= 65 && k2 <= 90) {
      return 'D3';
    }
  } else if (k1 >= 65 && k1 < 90) {
    if (k2 < 35) {
      return 'E1';
    } else if (k2 >= 35 && k2 < 40) {
      return 'E4';
    } else if (k2 >= 45 && k2 < 60) {
      return 'F1';
    } else if (k2 >= 60 && k2 < 65) {
      return 'D4';
    } else if (k2 >= 65 && k2 <= 90) {
      return 'D1';
    }
  }
}
