export default function inverse(test: string, value: number) {
  if (test === 'CTT' || test === 'MAT') {
    switch (value) {
      case 1:
        return 5;
        break;
      case 2:
        return 4;
        break;
      case 3:
        return 3;
        break;
      case 4:
        return 2;
        break;
      case 5:
        return 1;
        break;
    }
  } else {
    switch (value) {
      case 1:
        return 4;
        break;
      case 2:
        return 3;
        break;
      case 3:
        return 2;
        break;
      case 4:
        return 1;
        break;
    }
  }
}
