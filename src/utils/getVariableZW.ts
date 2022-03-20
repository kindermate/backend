export function getVariablesCTT(
  month: number,
  gender: string,
  part: number,
): [number, number] {
  console.log('getVariablesCTT', month);
  if (month >= 24 && month <= 35) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.64, 2.93];
        case 2:
          return [7.19, 2.85];
        case 3:
          return [17.78, 3.55];
        case 4:
          return [10.49, 3.34];
        case 5:
          return [11.9, 3.15];
        case 6:
          return [16.83, 4.27];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [15.52, 3.05];
        case 2:
          return [7.27, 2.73];
        case 3:
          return [18.13, 3.61];
        case 4:
          return [10.55, 3.6];
        case 5:
          return [11.8, 2.96];
        case 6:
          return [15.11, 4.09];
      }
    }
  }
  if (month >= 36 && month <= 47) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.48, 2.68];
        case 2:
          return [7.31, 2.84];
        case 3:
          return [18.2, 3.47];
        case 4:
          return [10.1, 3.24];
        case 5:
          return [11.34, 2.97];
        case 6:
          return [16.1, 3.78];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [14.85, 3.19];
        case 2:
          return [7.58, 2.72];
        case 3:
          return [18.08, 3.61];
        case 4:
          return [9.85, 3.67];
        case 5:
          return [11.24, 2.95];
        case 6:
          return [15.15, 3.77];
      }
    }
  }
  if (month >= 48 && month <= 59) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [14.68, 2.96];
        case 2:
          return [7.47, 2.46];
        case 3:
          return [17.93, 3.43];
        case 4:
          return [10.29, 3.46];
        case 5:
          return [11.29, 2.76];
        case 6:
          return [16.03, 3.64];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [14.72, 2.9];
        case 2:
          return [7.45, 2.37];
        case 3:
          return [17.83, 3.45];
        case 4:
          return [9.62, 3.27];
        case 5:
          return [11.06, 2.66];
        case 6:
          return [15.02, 3.73];
      }
    }
  }
  if (month >= 60 && month <= 71) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.5, 2.91];
        case 2:
          return [7.67, 2.61];
        case 3:
          return [18.24, 3.45];
        case 4:
          return [8.98, 3.24];
        case 5:
          return [10.74, 2.75];
        case 6:
          return [15.4, 3.81];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [15.43, 2.99];
        case 2:
          return [7.6, 2.46];
        case 3:
          return [17.84, 3.35];
        case 4:
          return [8.8, 3.21];
        case 5:
          return [10.71, 2.7];
        case 6:
          return [14.0, 3.7];
      }
    }
  }
  if (month >= 72 && month <= 83) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.44, 2.9];
        case 2:
          return [7.64, 2.65];
        case 3:
          return [18.22, 3.2];
        case 4:
          return [8.93, 3.28];
        case 5:
          return [10.87, 2.78];
        case 6:
          return [15.1, 3.92];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [15.18, 2.77];
        case 2:
          return [7.79, 2.43];
        case 3:
          return [18.06, 3.39];
        case 4:
          return [8.39, 3.07];
        case 5:
          return [10.42, 2.62];
        case 6:
          return [13.61, 3.6];
      }
    }
  }
  if (month >= 84 && month <= 95) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.27, 2.67];
        case 2:
          return [7.56, 2.31];
        case 3:
          return [18.55, 3.04];
        case 4:
          return [8.7, 3.07];
        case 5:
          return [10.97, 2.56];
        case 6:
          return [15.03, 3.94];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [14.57, 2.89];
        case 2:
          return [7.54, 2.41];
        case 3:
          return [17.7, 3.45];
        case 4:
          return [8.78, 3.21];
        case 5:
          return [10.82, 2.62];
        case 6:
          return [13.46, 3.96];
      }
    }
  }
  if (month >= 96 && month <= 120) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [14.53, 3.14];
        case 2:
          return [7.64, 2.37];
        case 3:
          return [18.27, 3.21];
        case 4:
          return [8.69, 3.31];
        case 5:
          return [10.81, 2.78];
        case 6:
          return [14.85, 3.96];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [14.25, 2.98];
        case 2:
          return [7.47, 2.56];
        case 3:
          return [17.54, 3.32];
        case 4:
          return [8.65, 3.23];
        case 5:
          return [10.8, 2.9];
        case 6:
          return [13.73, 3.92];
      }
    }
  }
}

export function getVariablesMAT(
  month: number,
  gender: string,
  part: number,
): [number, number] {
  console.log('getVariablesMAT', month);
  if (month >= 24 && month <= 35) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [16.41, 2.81];
        case 2:
          return [16.44, 2.54];
        case 3:
          return [17.02, 4.0];
        case 4:
          return [12.77, 3.37];
        case 5:
          return [20.35, 4.29];
        case 6:
          return [8.83, 3.21];
        case 7:
          return [15.06, 3.39];
        case 8:
          return [13.98, 2.89];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [17.8, 2.37];
        case 2:
          return [16.68, 1.82];
        case 3:
          return [15.53, 3.88];
        case 4:
          return [15.67, 2.86];
        case 5:
          return [21.33, 4.47];
        case 6:
          return [8.87, 3.05];
        case 7:
          return [15.0, 3.22];
        case 8:
          return [14.17, 3.01];
      }
    }
  }
  if (month >= 36 && month <= 47) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [16.41, 2.81];
        case 2:
          return [16.42, 2.25];
        case 3:
          return [17.02, 4.0];
        case 4:
          return [12.77, 3.37];
        case 5:
          return [20.35, 4.29];
        case 6:
          return [8.83, 3.21];
        case 7:
          return [15.06, 3.39];
        case 8:
          return [13.98, 2.89];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [17.8, 2.37];
        case 2:
          return [16.72, 2.26];
        case 3:
          return [15.53, 3.88];
        case 4:
          return [15.67, 2.86];
        case 5:
          return [21.33, 4.47];
        case 6:
          return [8.87, 3.05];
        case 7:
          return [15.0, 3.22];
        case 8:
          return [14.17, 3.01];
      }
    }
  }
  if (month >= 48 && month <= 59) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.8, 2.86];
        case 2:
          return [15.93, 2.22];
        case 3:
          return [17.51, 3.75];
        case 4:
          return [14.21, 3.17];
        case 5:
          return [21.35, 3.91];
        case 6:
          return [11.97, 3.83];
        case 7:
          return [14.96, 3.0];
        case 8:
          return [13.95, 2.72];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [16.78, 2.6];
        case 2:
          return [16.08, 2.18];
        case 3:
          return [15.58, 3.63];
        case 4:
          return [16.51, 2.68];
        case 5:
          return [21.97, 3.79];
        case 6:
          return [12.41, 3.8];
        case 7:
          return [15.47, 2.87];
        case 8:
          return [14.09, 2.74];
      }
    }
  }
  if (month >= 60 && month <= 71) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.46, 3.19];
        case 2:
          return [16.53, 2.02];
        case 3:
          return [18.81, 3.54];
        case 4:
          return [14.95, 3.2];
        case 5:
          return [21.93, 3.89];
        case 6:
          return [14.49, 3.72];
        case 7:
          return [15.46, 3.01];
        case 8:
          return [14.42, 2.78];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [17.0, 2.45];
        case 2:
          return [16.56, 2.03];
        case 3:
          return [16.43, 3.66];
        case 4:
          return [17.68, 2.13];
        case 5:
          return [22.64, 3.49];
        case 6:
          return [14.98, 3.44];
        case 7:
          return [15.89, 2.78];
        case 8:
          return [14.74, 2.83];
      }
    }
  }
  if (month >= 72 && month <= 83) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [15.3, 3.14];
        case 2:
          return [16.76, 2.15];
        case 3:
          return [19.26, 3.58];
        case 4:
          return [15.05, 3.21];
        case 5:
          return [22.05, 3.72];
        case 6:
          return [15.6, 3.01];
        case 7:
          return [15.32, 3.12];
        case 8:
          return [14.26, 2.78];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [16.55, 2.7];
        case 2:
          return [16.78, 2.05];
        case 3:
          return [16.96, 3.58];
        case 4:
          return [17.65, 2.25];
        case 5:
          return [22.7, 3.64];
        case 6:
          return [16.5, 2.66];
        case 7:
          return [15.67, 2.85];
        case 8:
          return [14.9, 2.75];
      }
    }
  }
  if (month >= 84 && month <= 95) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [14.7, 3.15];
        case 2:
          return [16.72, 2.11];
        case 3:
          return [18.76, 3.72];
        case 4:
          return [14.23, 3.29];
        case 5:
          return [21.74, 3.48];
        case 6:
          return [16.32, 2.37];
        case 7:
          return [14.73, 2.79];
        case 8:
          return [13.92, 2.98];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [16.04, 3.15];
        case 2:
          return [16.84, 1.94];
        case 3:
          return [16.56, 3.81];
        case 4:
          return [17.4, 2.49];
        case 5:
          return [22.64, 3.81];
        case 6:
          return [17.07, 2.22];
        case 7:
          return [15.65, 2.71];
        case 8:
          return [14.76, 2.8];
      }
    }
  }
  if (month >= 96 && month <= 120) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [14.5, 3.57];
        case 2:
          return [16.6, 2.28];
        case 3:
          return [19.15, 3.73];
        case 4:
          return [14.42, 3.27];
        case 5:
          return [22.01, 4.04];
        case 6:
          return [16.25, 2.66];
        case 7:
          return [14.58, 3.23];
        case 8:
          return [14.09, 2.91];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [15.62, 3.34];
        case 2:
          return [16.64, 2.23];
        case 3:
          return [16.85, 4.09];
        case 4:
          return [16.86, 2.48];
        case 5:
          return [22.59, 4.1];
        case 6:
          return [17.22, 2.32];
        case 7:
          return [15.29, 2.96];
        case 8:
          return [14.42, 2.93];
      }
    }
  }
}

export function getVariablesPBT(
  month: number,
  gender: string,
  part: number,
): [number, number] {
  console.log('getVariablesPBT', month);
  if (month >= 24 && month <= 35) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [21.14, 2.8];
        case 2:
          return [8.74, 2.55];
        case 3:
          return [4.93, 1.5];
        case 4:
          return [14.71, 1.57];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [20.89, 2.92];
        case 2:
          return [8.71, 2.35];
        case 3:
          return [5.13, 1.63];
        case 4:
          return [14.62, 1.61];
      }
    }
  }
  if (month >= 36 && month <= 47) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [20.67, 2.84];
        case 2:
          return [9.44, 2.52];
        case 3:
          return [5.38, 1.75];
        case 4:
          return [14.27, 1.74];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [20.82, 2.82];
        case 2:
          return [9.27, 2.6];
        case 3:
          return [5.3, 1.74];
        case 4:
          return [14.37, 1.78];
      }
    }
  }
  if (month >= 48 && month <= 59) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [19.64, 2.93];
        case 2:
          return [11.16, 3.0];
        case 3:
          return [7.33, 2.47];
        case 4:
          return [13.21, 1.92];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [20.0, 2.75];
        case 2:
          return [10.72, 2.83];
        case 3:
          return [6.88, 2.21];
        case 4:
          return [13.42, 1.94];
      }
    }
  }
  if (month >= 60 && month <= 71) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [20.09, 2.79];
        case 2:
          return [10.7, 2.74];
        case 3:
          return [6.8, 2.15];
        case 4:
          return [13.84, 1.9];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [20.09, 2.67];
        case 2:
          return [10.54, 2.6];
        case 3:
          return [6.59, 1.99];
        case 4:
          return [13.66, 1.8];
      }
    }
  }
  if (month >= 72 && month <= 83) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [19.8, 2.74];
        case 2:
          return [10.96, 2.85];
        case 3:
          return [7.17, 2.18];
        case 4:
          return [13.75, 1.89];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [19.72, 2.79];
        case 2:
          return [10.71, 2.7];
        case 3:
          return [6.87, 2.12];
        case 4:
          return [13.72, 1.85];
      }
    }
  }
  if (month >= 84 && month <= 95) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [19.6, 2.59];
        case 2:
          return [11.22, 2.87];
        case 3:
          return [7.79, 2.13];
        case 4:
          return [13.18, 2.03];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [19.74, 2.54];
        case 2:
          return [11.07, 2.79];
        case 3:
          return [7.51, 2.12];
        case 4:
          return [13.54, 1.83];
      }
    }
  }
  if (month >= 96 && month <= 120) {
    if (gender === 'male') {
      switch (part) {
        case 1:
          return [19.43, 2.58];
        case 2:
          return [11.5, 2.54];
        case 3:
          return [8.02, 2.1];
        case 4:
          return [13.34, 1.84];
      }
    } else if (gender === 'female') {
      switch (part) {
        case 1:
          return [19.33, 3.2];
        case 2:
          return [11.39, 2.66];
        case 3:
          return [7.92, 2.26];
        case 4:
          return [13.32, 1.86];
      }
    }
  }
}
