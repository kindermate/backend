// VL, L, NL, N, NH, H, VH
export function getGradeLimitCTT(
  tw: number,
  month: number,
  gender: string,
  part: number,
): [number, number, string] {
  console.log('getGradeLimitCTT', month);
  if (part === 1) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 44.4) {
          return [10.27, 44.4, 'L'];
        } else if (tw <= 58.05) {
          return [44.4, 58.05, 'N'];
        } else if (tw <= 64.88) {
          return [58.05, 64.88, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.02) {
          return [12.23, 45.02, 'L'];
        } else if (tw <= 58.13) {
          return [45.02, 58.13, 'N'];
        } else if (tw <= 64.69) {
          return [58.13, 64.69, 'H'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 44.48) {
          return [7.16, 44.48, 'L'];
        } else if (tw <= 55.67) {
          return [44.48, 55.67, 'N'];
        } else if (tw <= 66.87) {
          return [55.67, 66.87, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.2) {
          return [15.99, 44.2, 'L'];
        } else if (tw <= 56.74) {
          return [44.2, 56.74, 'N'];
        } else if (tw <= 66.14) {
          return [56.74, 66.14, 'H'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 44.32) {
          return [13.92, 44.32, 'L'];
        } else if (tw <= 54.46) {
          return [44.32, 54.46, 'N'];
        } else if (tw <= 67.97) {
          return [54.46, 67.97, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.07) {
          return [13.03, 44.07, 'L'];
        } else if (tw <= 54.41) {
          return [44.07, 54.41, 'N'];
        } else if (tw <= 68.21) {
          return [54.41, 68.21, 'H'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 44.85) {
          return [10.48, 44.85, 'L'];
        } else if (tw <= 55.1) {
          return [44.85, 55.1, 'N'];
        } else if (tw <= 65.46) {
          return [55.1, 65.46, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.22) {
          return [11.77, 45.22, 'L'];
        } else if (tw <= 55.25) {
          return [45.22, 55.25, 'N'];
        } else if (tw <= 65.28) {
          return [55.25, 65.28, 'H'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 45.03) {
          return [10.55, 45.03, 'L'];
        } else if (tw <= 55.38) {
          return [45.03, 55.38, 'N'];
        } else if (tw <= 65.72) {
          return [55.38, 65.72, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.74) {
          return [9.64, 45.74, 'L'];
        } else if (tw <= 56.57) {
          return [45.74, 56.57, 'N'];
        } else if (tw <= 67.4) {
          return [56.57, 67.4, 'H'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 45.24) {
          return [7.79, 45.24, 'L'];
        } else if (tw <= 56.48) {
          return [45.24, 56.48, 'N'];
        } else if (tw <= 67.72) {
          return [56.48, 67.72, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.57) {
          return [13.43, 44.57, 'L'];
        } else if (tw <= 54.95) {
          return [44.57, 54.95, 'N'];
        } else if (tw <= 68.79) {
          return [54.95, 68.79, 'H'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 45.13) {
          return [16.46, 45.13, 'L'];
        } else if (tw <= 54.68) {
          return [45.13, 54.68, 'N'];
        } else if (tw <= 67.42) {
          return [54.68, 67.42, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.81) {
          return [15.6, 45.81, 'L'];
        } else if (tw <= 55.87) {
          return [45.81, 55.87, 'N'];
        } else if (tw <= 69.3) {
          return [55.87, 69.3, 'H'];
        }
      }
    }
  }
  if (part === 2) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 45.12) {
          return [35.3, 45.12, 'L'];
        } else if (tw <= 56.35) {
          return [45.12, 56.35, 'N'];
        } else if (tw <= 78.32) {
          return [56.35, 78.32, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.35) {
          return [34.36, 45.35, 'L'];
        } else if (tw <= 56.34) {
          return [45.35, 56.34, 'N'];
        } else if (tw <= 77.4) {
          return [56.34, 77.4, 'H'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 45.39) {
          return [34.82, 45.39, 'L'];
        } else if (tw <= 55.95) {
          return [45.39, 55.95, 'N'];
        } else if (tw <= 77.08) {
          return [55.95, 77.08, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.19) {
          return [33.16, 44.19, 'L'];
        } else if (tw <= 55.22) {
          return [44.19, 55.22, 'N'];
        } else if (tw <= 77.28) {
          return [55.22, 77.28, 'H'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 44.02) {
          return [31.83, 44.02, 'L'];
        } else if (tw <= 56.22) {
          return [44.02, 56.22, 'N'];
        } else if (tw <= 80.61) {
          return [56.22, 80.61, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.88) {
          return [31.22, 43.88, 'L'];
        } else if (tw <= 56.54) {
          return [43.88, 56.54, 'N'];
        } else if (tw <= 81.86) {
          return [56.54, 81.86, 'H'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 43.6) {
          return [32.11, 43.6, 'L'];
        } else if (tw <= 55.1) {
          return [43.6, 55.1, 'N'];
        } else if (tw <= 78.08) {
          return [55.1, 78.08, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.5) {
          return [31.3, 43.5, 'L'];
        } else if (tw <= 55.69) {
          return [43.5, 55.69, 'N'];
        } else if (tw <= 80.08) {
          return [55.69, 80.08, 'H'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 43.81) {
          return [32.49, 43.81, 'L'];
        } else if (tw <= 55.13) {
          return [43.81, 55.13, 'N'];
        } else if (tw <= 77.77) {
          return [55.13, 77.77, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 42.63) {
          return [30.29, 42.63, 'L'];
        } else if (tw <= 54.98) {
          return [42.63, 54.98, 'N'];
        } else if (tw <= 79.67) {
          return [54.98, 79.67, 'H'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 43.25) {
          return [30.26, 43.25, 'L'];
        } else if (tw <= 56.23) {
          return [43.25, 56.23, 'N'];
        } else if (tw <= 82.21) {
          return [56.23, 82.21, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.61) {
          return [31.16, 43.61, 'L'];
        } else if (tw <= 56.06) {
          return [43.61, 56.06, 'N'];
        } else if (tw <= 80.95) {
          return [56.06, 80.95, 'H'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 43.08) {
          return [30.42, 43.08, 'L'];
        } else if (tw <= 55.74) {
          return [43.08, 55.74, 'N'];
        } else if (tw <= 81.05) {
          return [55.74, 81.05, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.26) {
          return [32.54, 44.26, 'L'];
        } else if (tw <= 55.98) {
          return [44.26, 55.98, 'N'];
        } else if (tw <= 79.41) {
          return [55.98, 79.41, 'H'];
        }
      }
    }
  }
  if (part === 3) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 43.98) {
          return [9.5, 43.98, 'L'];
        } else if (tw <= 56.52) {
          return [43.98, 56.52, 'N'];
        } else if (tw <= 72.19) {
          return [56.52, 72.19, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.72) {
          return [7.38, 45.72, 'L'];
        } else if (tw <= 55.3) {
          return [45.72, 55.3, 'N'];
        } else if (tw <= 71.28) {
          return [55.3, 71.28, 'H'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 43.8) {
          return [6.64, 43.8, 'L'];
        } else if (tw <= 56.14) {
          return [43.8, 56.14, 'N'];
        } else if (tw <= 71.79) {
          return [56.14, 71.79, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.46) {
          return [7.6, 45.46, 'L'];
        } else if (tw <= 54.92) {
          return [45.46, 54.92, 'N'];
        } else if (tw <= 70.69) {
          return [54.92, 70.69, 'H'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 46.78) {
          return [7.3, 46.78, 'L'];
        } else if (tw <= 56.64) {
          return [46.78, 56.64, 'N'];
        } else if (tw <= 73.09) {
          return [56.64, 73.09, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 46.35) {
          return [7.26, 46.35, 'L'];
        } else if (tw <= 56.12) {
          return [46.35, 56.12, 'N'];
        } else if (tw <= 72.41) {
          return [56.12, 72.41, 'H'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 45.44) {
          return [6.35, 45.44, 'L'];
        } else if (tw <= 55.21) {
          return [45.44, 55.21, 'N'];
        } else if (tw <= 71.5) {
          return [55.21, 71.5, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.47) {
          return [4.93, 45.47, 'L'];
        } else if (tw <= 55.61) {
          return [45.47, 55.61, 'N'];
        } else if (tw <= 75.2) {
          return [55.61, 75.2, 'H'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 45.72) {
          return [4.62, 45.72, 'L'];
        } else if (tw <= 55.99) {
          return [45.72, 55.99, 'N'];
        } else if (tw <= 73.1) {
          return [55.99, 73.12, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.17) {
          return [5.43, 45.17, 'L'];
        } else if (tw <= 55.1) {
          return [45.17, 55.1, 'N'];
        } else if (tw <= 71.66) {
          return [55.1, 71.66, 'H'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 44.73) {
          return [2.03, 44.73, 'L'];
        } else if (tw <= 55.41) {
          return [44.73, 55.41, 'N'];
        } else if (tw <= 73.2) {
          return [55.41, 73.2, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 46.56) {
          return [7.6, 46.56, 'L'];
        } else if (tw <= 56.3) {
          return [46.56, 56.3, 'N'];
        } else if (tw <= 72.53) {
          return [56.3, 72.53, 'H'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 46.12) {
          return [5.31, 46.12, 'L'];
        } else if (tw <= 56.33) {
          return [46.12, 56.33, 'N'];
        } else if (tw <= 73.33) {
          return [56.33, 73.33, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.64) {
          return [7.57, 43.64, 'L'];
        } else if (tw <= 56.75) {
          return [43.64, 56.75, 'N'];
        } else if (tw <= 73.15) {
          return [56.75, 73.15, 'H'];
        }
      }
    }
  }
  if (part === 4) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 45.54) {
          return [30.57, 45.54, 'L'];
        } else if (tw <= 54.62) {
          return [45.54, 54.62, 'N'];
        } else if (tw <= 78.47) {
          return [54.62, 78.47, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 42.92) {
          return [31.81, 42.92, 'L'];
        } else if (tw <= 54.03) {
          return [42.92, 54.03, 'N'];
        } else if (tw <= 76.25) {
          return [54.03, 76.25, 'H'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 43.8) {
          return [31.45, 43.8, 'L'];
        } else if (tw <= 56.14) {
          return [43.8, 56.14, 'N'];
        } else if (tw <= 80.83) {
          return [56.14, 80.83, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 42.53) {
          // 이상
          return [34.06, 42.53, 'L'];
        } else if (tw <= 53.13) {
          return [42.23, 53.13, 'N'];
        } else if (tw <= 77.66) {
          return [53.13, 77.66, 'H'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        console.log('this', tw);
        if (tw <= 43.38) {
          return [31.82, 43.38, 'L'];
        } else if (tw <= 54.94) {
          return [43.38, 54.94, 'N'];
        } else if (tw > 54.94) {
          return [54.94, 78.06, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.05) {
          return [32.81, 45.05, 'L'];
        } else if (tw <= 54.22) {
          return [45.05, 54.22, 'N'];
        } else if (tw <= 81.74) {
          return [54.22, 81.74, 'H'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 43.89) {
          return [34.63, 43.89, 'L'];
        } else if (tw <= 56.23) {
          return [43.89, 56.23, 'N'];
        } else if (tw <= 84.01) {
          return [56.23, 84.01, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.39) {
          return [35.05, 44.39, 'L'];
        } else if (tw <= 53.74) {
          return [44.39, 53.74, 'N'];
        } else if (tw <= 84.89) {
          return [53.74, 84.89, 'H'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 44.12) {
          return [34.97, 44.12, 'L'];
        } else if (tw <= 53.2) {
          return [44.12, 53.26, 'N'];
        } else if (tw <= 83.75) {
          return [53.26, 83.75, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.47) {
          return [35.7, 45.47, 'L'];
        } else if (tw <= 55.24) {
          return [45.47, 55.24, 'N'];
        } else if (tw <= 87.82) {
          return [55.24, 87.82, 'H'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 44.46) {
          return [34.69, 44.46, 'L'];
        } else if (tw <= 54.23) {
          return [44.46, 54.23, 'N'];
        } else if (tw <= 86.81) {
          return [54.23, 86.81, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.45) {
          return [35.11, 44.45, 'L'];
        } else if (tw <= 53.8) {
          return [44.45, 53.8, 'N'];
        } else if (tw <= 84.95) {
          return [53.8, 84.95, 'H'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 41.87) {
          return [35.83, 41.87, 'L'];
        } else if (tw <= 53.96) {
          return [41.87, 53.96, 'N'];
        } else if (tw <= 84.17) {
          return [53.96, 84.17, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 41.8) {
          return [35.6, 41.8, 'L'];
        } else if (tw <= 54.18) {
          return [41.8, 54.18, 'N'];
        } else if (tw <= 85.14) {
          return [54.18, 85.14, 'H'];
        }
      }
    }
  }
  if (part === 5) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 43.97) {
          return [24.92, 43.97, 'L'];
        } else if (tw <= 53.49) {
          return [43.97, 53.49, 'N'];
        } else if (tw <= 75.71) {
          return [53.49, 75.71, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.92) {
          return [23.65, 43.92, 'L'];
        } else if (tw <= 54.05) {
          return [43.92, 54.05, 'N'];
        } else if (tw <= 77.7) {
          return [54.05, 77.7, 'H'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 45.49) {
          return [25.29, 45.49, 'L'];
        } else if (tw <= 55.59) {
          return [45.49, 55.59, 'N'];
        } else if (tw <= 79.16) {
          return [55.59, 79.16, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.63) {
          return [25.46, 35.63, 'L'];
        } else if (tw <= 49.19) {
          return [35.63, 49.19, 'N'];
        } else if (tw <= 79.69) {
          return [49.19, 79.69, 'H'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 45.33) {
          return [23.59, 45.33, 'L'];
        } else if (tw <= 52.57) {
          return [45.33, 52.57, 'N'];
        } else if (tw <= 81.56) {
          return [52.57, 81.56, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 46.02) {
          return [23.46, 46.02, 'L'];
        } else if (tw <= 53.53) {
          return [46.02, 53.53, 'N'];
        } else if (tw <= 83.61) {
          return [53.53, 83.61, 'H'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 43.67) {
          return [25.49, 43.67, 'L'];
        } else if (tw <= 54.58) {
          return [43.67, 54.58, 'N'];
        } else if (tw <= 83.67) {
          return [54.58, 83.67, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.67) {
          return [25.15, 43.67, 'L'];
        } else if (tw <= 54.78) {
          return [43.67, 54.78, 'N'];
        } else if (tw <= 84.41) {
          return [54.78, 84.41, 'H'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 43.27) {
          return [25.29, 43.27, 'L'];
        } else if (tw <= 54.06) {
          return [43.27, 54.06, 'N'];
        } else if (tw <= 82.84) {
          return [54.06, 82.84, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.5) {
          return [25.2, 44.58, 'L'];
        } else if (tw <= 56.03) {
          return [44.58, 56.03, 'N'];
        } else if (tw <= 86.56) {
          return [56.03, 86.56, 'H'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 46.21) {
          return [22.77, 46.21, 'L'];
        } else if (tw <= 54.02) {
          return [46.21, 54.02, 'N'];
        } else if (tw <= 85.27) {
          return [54.02, 85.27, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.05) {
          return [23.97, 43.05, 'L'];
        } else if (tw <= 54.5) {
          return [43.05, 54.5, 'N'];
        } else if (tw <= 85.04) {
          return [54.5, 85.04, 'H'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 43.49) {
          return [25.5, 43.49, 'L'];
        } else if (tw <= 54.28) {
          return [43.49, 54.28, 'N'];
        } else if (tw <= 83.06) {
          return [54.28, 83.06, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.7) {
          return [26.55, 43.79, 'L'];
        } else if (tw <= 54.14) {
          return [43.79, 54.14, 'N'];
        } else if (tw <= 81.72) {
          return [54.14, 81.72, 'H'];
        }
      }
    }
  }
  if (part === 6) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 45.71) {
          return [22.3, 45.71, 'L'];
        } else if (tw <= 55.08) {
          return [45.71, 55.08, 'N'];
        } else if (tw <= 69.13) {
          return [55.08, 69.13, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.84) {
          return [25.28, 44.84, 'L'];
        } else if (tw <= 54.6) {
          return [44.84, 54.62, 'N'];
        } else if (tw <= 74.18) {
          return [54.62, 74.18, 'H'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 44.44) {
          return [20.63, 44.44, 'L'];
        } else if (tw <= 55.03) {
          return [44.44, 55.03, 'N'];
        } else if (tw <= 73.54) {
          return [55.03, 73.54, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.3) {
          return [23.08, 44.3, 'L'];
        } else if (tw <= 54.91) {
          return [44.3, 54.91, 'N'];
        } else if (tw <= 76.13) {
          return [54.91, 76.13, 'H'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 44.42) {
          return [19.7, 44.42, 'L'];
        } else if (tw <= 55.41) {
          return [44.42, 55.41, 'N'];
        } else if (tw <= 74.64) {
          return [55.41, 74.64, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.58) {
          return [23.14, 44.58, 'L'];
        } else if (tw <= 55.31) {
          return [44.58, 55.31, 'N'];
        } else if (tw <= 76.76) {
          return [55.31, 76.76, 'H'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 43.7) {
          return [22.7, 43.7, 'L'];
        } else if (tw <= 54.2) {
          return [43.7, 54.2, 'N'];
        } else if (tw <= 75.2) {
          return [54.2, 75.2, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.58) {
          return [25.61, 44.58, 'L'];
        } else if (tw <= 55.42) {
          return [44.58, 55.42, 'N'];
        } else if (tw <= 79.81) {
          return [55.42, 79.81, 'H'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 44.64) {
          return [24.23, 44.64, 'L'];
        } else if (tw <= 54.85) {
          return [44.64, 54.85, 'N'];
        } else if (tw <= 75.26) {
          return [54.85, 75.26, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 45.53) {
          return [26.08, 45.53, 'L'];
        } else if (tw <= 53.86) {
          return [45.53, 53.86, 'N'];
        } else if (tw <= 81.64) {
          return [53.86, 81.64, 'H'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 44.85) {
          return [24.54, 44.85, 'L'];
        } else if (tw <= 55.0) {
          return [44.85, 55.0, 'N'];
        } else if (tw <= 75.3) {
          return [55.0, 75.3, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 43.79) {
          return [28.64, 43.79, 'L'];
        } else if (tw <= 53.89) {
          return [43.79, 53.89, 'N'];
        } else if (tw <= 79.14) {
          return [53.89, 79.14, 'H'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 45.33) {
          return [25.13, 45.33, 'L'];
        } else if (tw <= 55.43) {
          return [45.33, 55.43, 'N'];
        } else if (tw <= 75.63) {
          return [55.43, 75.63, 'H'];
        }
      } else if (gender === 'female') {
        if (tw <= 44.31) {
          return [27.73, 44.31, 'L'];
        } else if (tw <= 53.24) {
          return [44.31, 53.24, 'N'];
        } else if (tw <= 78.75) {
          return [53.24, 78.75, 'H'];
        }
      }
    }
  }
}

// VL, L, NL, N, NH, H, VH
export function getGradeLimitMAT(
  tw: number,
  month: number,
  gender: string,
  part: number,
): [number, number, string] {
  console.log('getGradeLimitMAT', month);
  if (part === 1) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 34.31) {
          return [5.84, 34.31, 'VL'];
        } else if (tw <= 41.42) {
          return [34.31, 41.42, 'L'];
        } else if (tw <= 48.54) {
          return [41.42, 48.54, 'NL'];
        } else if (tw <= 52.1) {
          return [48.54, 52.1, 'N'];
        } else if (tw <= 59.22) {
          return [52.1, 59.22, 'NH'];
        } else if (tw <= 62.78) {
          return [59.22, 62.78, 'H'];
        } else if (tw <= 65.78) {
          return [62.78, 65.78, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 38.19) {
          return [-8.23, 38.19, 'VL'];
        } else if (tw <= 42.41) {
          return [38.19, 42.41, 'L'];
        } else if (tw <= 46.62) {
          return [42.41, 46.62, 'NL'];
        } else if (tw <= 55.06) {
          return [46.62, 55.06, 'N'];
        } else if (tw <= 59.28) {
          return [55.06, 59.28, 'NH'];
        } else if (tw <= 62.28) {
          return [59.28, 62.28, 'H'];
        } else if (tw <= 65.28) {
          return [62.28, 65.28, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 34.31) {
          return [5.84, 34.31, 'VL'];
        } else if (tw <= 41.42) {
          return [34.31, 41.42, 'L'];
        } else if (tw <= 48.54) {
          return [41.42, 48.54, 'NL'];
        } else if (tw <= 52.1) {
          return [48.54, 52.1, 'N'];
        } else if (tw <= 59.22) {
          return [52.1, 59.22, 'NH'];
        } else if (tw <= 62.78) {
          return [59.22, 62.78, 'H'];
        } else if (tw <= 65.78) {
          return [62.78, 65.78, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 38.19) {
          return [-8.23, 38.19, 'VL'];
        } else if (tw <= 42.41) {
          return [38.19, 42.41, 'L'];
        } else if (tw <= 46.62) {
          return [42.41, 46.62, 'NL'];
        } else if (tw <= 55.06) {
          return [46.62, 55.06, 'N'];
        } else if (tw <= 59.28) {
          return [55.06, 59.28, 'NH'];
        } else if (tw <= 62.28) {
          return [59.28, 62.28, 'H'];
        } else if (tw <= 65.28) {
          return [62.28, 65.28, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 36.71) {
          return [8.75, 36.71, 'VL'];
        } else if (tw <= 40.21) {
          return [36.71, 40.21, 'L'];
        } else if (tw <= 47.2) {
          return [40.21, 47.2, 'NL'];
        } else if (tw <= 54.2) {
          return [47.2, 54.2, 'N'];
        } else if (tw <= 61.19) {
          return [54.2, 61.19, 'NH'];
        } else if (tw <= 64.69) {
          return [61.19, 64.69, 'H'];
        } else if (tw <= 67.7) {
          return [64.69, 67.7, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.46) {
          return [0.92, 35.46, 'VL'];
        } else if (tw <= 43.15) {
          return [35.46, 43.15, 'L'];
        } else if (tw <= 47.0) {
          return [43.15, 47.0, 'NL'];
        } else if (tw <= 54.69) {
          return [47.0, 54.69, 'N'];
        } else if (tw <= 58.54) {
          return [54.69, 58.54, 'NH'];
        } else if (tw <= 62.38) {
          return [58.54, 62.38, 'H'];
        } else if (tw <= 65.34) {
          return [62.38, 65.34, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 33.54) {
          return [14.05, 33.54, 'VL'];
        } else if (tw <= 42.29) {
          return [33.54, 42.29, 'L'];
        } else if (tw <= 48.56) {
          return [42.29, 48.56, 'NL'];
        } else if (tw <= 54.83) {
          return [48.56, 54.83, 'N'];
        } else if (tw <= 61.1) {
          return [54.83, 61.1, 'NH'];
        } else if (tw <= 64.23) {
          return [61.1, 64.23, 'H'];
        } else if (tw <= 67.26) {
          return [64.23, 67.26, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.67) {
          return [-3.09, 33.67, 'VL'];
        } else if (tw <= 41.84) {
          return [33.67, 41.84, 'L'];
        } else if (tw <= 45.92) {
          return [41.84, 45.92, 'NL'];
        } else if (tw <= 54.08) {
          return [45.92, 54.08, 'N'];
        } else if (tw <= 59.24) {
          return [54.08, 59.24, 'NH'];
        } else if (tw <= 62.24) {
          return [59.24, 62.24, 'H'];
        } else if (tw <= 65.26) {
          return [62.24, 65.26, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 33.12) {
          return [14.08, 33.12, 'VL'];
        } else if (tw <= 42.68) {
          return [33.12, 42.68, 'L'];
        } else if (tw <= 45.86) {
          return [42.68, 45.86, 'NL'];
        } else if (tw <= 52.23) {
          return [45.86, 52.23, 'N'];
        } else if (tw <= 58.6) {
          return [52.23, 58.6, 'NH'];
        } else if (tw <= 64.97) {
          return [58.6, 64.97, 'H'];
        } else if (tw <= 67.96) {
          return [64.97, 67.96, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.15) {
          return [3.46, 33.15, 'VL'];
        } else if (tw <= 40.56) {
          return [33.15, 40.56, 'L'];
        } else if (tw <= 47.96) {
          return [40.56, 47.96, 'NL'];
        } else if (tw <= 55.37) {
          return [47.96, 55.37, 'N'];
        } else if (tw <= 59.07) {
          return [55.37, 59.07, 'NH'];
        } else if (tw <= 62.78) {
          return [59.07, 62.78, 'H'];
        } else if (tw <= 65.79) {
          return [62.78, 65.79, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 35.08) {
          return [16.05, 35.08, 'VL'];
        } else if (tw <= 41.43) {
          return [35.08, 41.43, 'L'];
        } else if (tw <= 47.78) {
          return [41.43, 47.78, 'NL'];
        } else if (tw <= 54.13) {
          return [47.78, 54.13, 'N'];
        } else if (tw <= 57.3) {
          return [54.13, 57.3, 'NH'];
        } else if (tw <= 63.65) {
          return [57.3, 63.65, 'H'];
        } else if (tw <= 66.84) {
          return [63.65, 66.84, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.0) {
          return [11.76, 34.0, 'VL'];
        } else if (tw <= 40.35) {
          return [34.0, 40.35, 'L'];
        } else if (tw <= 49.87) {
          return [40.35, 49.87, 'NL'];
        } else if (tw <= 53.05) {
          return [49.87, 53.05, 'N'];
        } else if (tw <= 59.4) {
          return [53.05, 59.4, 'NH'];
        } else if (tw <= 62.57) {
          return [59.4, 62.57, 'H'];
        } else if (tw <= 65.56) {
          return [62.57, 65.56, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 34.59) {
          return [20.58, 34.59, 'VL'];
        } else if (tw <= 43.0) {
          return [34.59, 43.0, 'L'];
        } else if (tw <= 45.8) {
          return [43.0, 45.8, 'NL'];
        } else if (tw <= 54.2) {
          return [45.8, 54.2, 'N'];
        } else if (tw <= 59.8) {
          return [54.2, 59.8, 'NH'];
        } else if (tw <= 65.41) {
          return [59.8, 65.41, 'H'];
        } else if (tw <= 68.42) {
          return [65.41, 68.42, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 30.93) {
          return [15.22, 30.93, 'VL'];
        } else if (tw <= 42.16) {
          return [30.93, 42.16, 'L'];
        } else if (tw <= 48.14) {
          return [42.16, 48.14, 'NL'];
        } else if (tw <= 54.13) {
          return [48.14, 54.13, 'N'];
        } else if (tw <= 60.12) {
          return [54.13, 60.12, 'NH'];
        } else if (tw <= 63.11) {
          return [60.12, 63.11, 'H'];
        } else if (tw <= 68.1) {
          return [63.11, 68.1, 'VH'];
        }
      }
    }
  }
  if (part === 2) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 34.8) {
          return [-5.2, 34.8, 'VL'];
        } else if (tw <= 43.69) {
          return [34.8, 43.69, 'L'];
        } else if (tw <= 48.13) {
          return [43.69, 48.13, 'NL'];
        } else if (tw <= 52.58) {
          return [48.13, 52.58, 'N'];
        } else if (tw <= 57.02) {
          return [52.58, 57.02, 'NH'];
        } else if (tw <= 61.47) {
          return [57.02, 61.47, 'H'];
        } else if (tw <= 65.91) {
          return [61.47, 65.91, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.27) {
          return [-19.67, 35.27, 'VL'];
        } else if (tw <= 40.77) {
          return [35.27, 40.77, 'L'];
        } else if (tw <= 46.26) {
          return [40.77, 46.26, 'NL'];
        } else if (tw <= 51.76) {
          return [46.26, 51.76, 'N'];
        } else if (tw <= 57.25) {
          return [51.76, 57.25, 'NH'];
        } else if (tw <= 62.75) {
          return [57.25, 62.75, 'H'];
        } else if (tw <= 68.24) {
          return [62.75, 68.24, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 34.8) {
          return [-5.2, 34.8, 'VL'];
        } else if (tw <= 43.69) {
          return [34.8, 43.69, 'L'];
        } else if (tw <= 48.13) {
          return [43.69, 48.13, 'NL'];
        } else if (tw <= 52.58) {
          return [48.13, 52.58, 'N'];
        } else if (tw <= 57.02) {
          return [52.58, 57.02, 'NH'];
        } else if (tw <= 61.47) {
          return [57.02, 61.47, 'H'];
        } else if (tw <= 65.91) {
          return [61.47, 65.91, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.27) {
          return [-19.67, 35.27, 'VL'];
        } else if (tw <= 40.77) {
          return [35.27, 40.77, 'L'];
        } else if (tw <= 46.26) {
          return [40.77, 46.26, 'NL'];
        } else if (tw <= 51.76) {
          return [46.26, 51.76, 'N'];
        } else if (tw <= 57.25) {
          return [51.76, 57.25, 'NH'];
        } else if (tw <= 62.75) {
          return [57.25, 62.75, 'H'];
        } else if (tw <= 68.24) {
          return [62.75, 68.24, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 32.3) {
          return [-3.62, 32.3, 'VL'];
        } else if (tw <= 41.31) {
          return [32.3, 41.31, 'L'];
        } else if (tw <= 45.81) {
          return [41.31, 45.81, 'NL'];
        } else if (tw <= 54.82) {
          return [45.81, 54.82, 'N'];
        } else if (tw <= 59.32) {
          return [54.82, 59.32, 'NH'];
        } else if (tw <= 63.83) {
          return [59.32, 63.83, 'H'];
        } else if (tw <= 68.3) {
          return [63.83, 68.3, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.87) {
          return [-5.5, 35.87, 'VL'];
        } else if (tw <= 40.46) {
          return [35.87, 40.46, 'L'];
        } else if (tw <= 49.63) {
          return [40.46, 49.63, 'NL'];
        } else if (tw <= 54.22) {
          return [49.63, 54.22, 'N'];
        } else if (tw <= 58.81) {
          return [54.22, 58.81, 'NH'];
        } else if (tw <= 63.39) {
          return [58.81, 63.39, 'H'];
        } else if (tw <= 67.99) {
          return [63.39, 67.99, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 37.48) {
          return [-11.95, 37.48, 'VL'];
        } else if (tw <= 42.43) {
          return [37.48, 42.43, 'L'];
        } else if (tw <= 47.38) {
          return [42.43, 47.38, 'NL'];
        } else if (tw <= 52.33) {
          return [47.38, 52.33, 'N'];
        } else if (tw <= 57.28) {
          return [52.33, 57.28, 'NH'];
        } else if (tw <= 62.23) {
          return [57.28, 62.23, 'H'];
        } else if (tw <= 67.14) {
          return [62.23, 67.14, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 32.46) {
          return [-11.83, 32.46, 'VL'];
        } else if (tw <= 42.32) {
          return [32.46, 42.32, 'L'];
        } else if (tw <= 47.24) {
          return [42.32, 47.24, 'NL'];
        } else if (tw <= 52.17) {
          return [47.24, 52.17, 'N'];
        } else if (tw <= 57.09) {
          return [52.17, 57.09, 'NH'];
        } else if (tw <= 62.02) {
          return [57.09, 62.02, 'H'];
        } else if (tw <= 66.96) {
          return [62.02, 66.96, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 32.51) {
          return [-9.47, 32.51, 'VL'];
        } else if (tw <= 41.81) {
          return [32.51, 41.81, 'L'];
        } else if (tw <= 46.47) {
          return [41.81, 46.47, 'NL'];
        } else if (tw <= 55.77) {
          return [46.47, 55.77, 'N'];
        } else if (tw <= 60.42) {
          return [55.77, 60.42, 'NH'];
        } else if (tw <= 65.07) {
          return [60.42, 65.07, 'H'];
        } else if (tw <= 68.09) {
          return [65.07, 68.09, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.44) {
          return [-12.31, 36.44, 'VL'];
        } else if (tw <= 41.32) {
          return [36.44, 41.32, 'L'];
        } else if (tw <= 46.2) {
          return [41.32, 46.2, 'NL'];
        } else if (tw <= 55.95) {
          return [46.2, 55.95, 'N'];
        } else if (tw <= 60.83) {
          return [55.95, 60.83, 'NH'];
        } else if (tw <= 65.71) {
          return [60.83, 65.71, 'H'];
        } else if (tw <= 68.71) {
          return [65.71, 68.71, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 32.37) {
          return [-10.29, 32.37, 'VL'];
        } else if (tw <= 41.85) {
          return [32.37, 41.85, 'L'];
        } else if (tw <= 46.59) {
          return [41.85, 46.59, 'NL'];
        } else if (tw <= 56.07) {
          return [46.59, 56.07, 'N'];
        } else if (tw <= 60.81) {
          return [56.07, 60.81, 'NH'];
        } else if (tw <= 65.55) {
          return [60.81, 65.55, 'H'];
        } else if (tw <= 68.53) {
          return [65.55, 68.53, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.36) {
          return [-16.13, 35.36, 'VL'];
        } else if (tw <= 40.52) {
          return [35.36, 40.52, 'L'];
        } else if (tw <= 45.67) {
          return [40.52, 45.67, 'NL'];
        } else if (tw <= 55.98) {
          return [45.67, 55.98, 'N'];
        } else if (tw <= 61.13) {
          return [55.98, 61.13, 'NH'];
        } else if (tw <= 66.29) {
          return [61.13, 66.29, 'H'];
        } else if (tw <= 69.25) {
          return [66.29, 69.25, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 34.21) {
          return [-5.28, 34.21, 'VL'];
        } else if (tw <= 42.98) {
          return [34.21, 42.98, 'L'];
        } else if (tw <= 47.37) {
          return [42.98, 47.37, 'NL'];
        } else if (tw <= 56.14) {
          return [47.37, 56.14, 'N'];
        } else if (tw <= 60.53) {
          return [56.14, 60.53, 'NH'];
        } else if (tw <= 64.91) {
          return [60.53, 64.91, 'H'];
        } else if (tw <= 67.89) {
          return [64.91, 67.89, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.68) {
          return [-6.75, 33.68, 'VL'];
        } else if (tw <= 42.65) {
          return [33.68, 42.65, 'L'];
        } else if (tw <= 47.13) {
          return [42.65, 47.13, 'NL'];
        } else if (tw <= 56.1) {
          return [47.13, 56.1, 'N'];
        } else if (tw <= 60.58) {
          return [56.1, 60.58, 'NH'];
        } else if (tw <= 65.07) {
          return [60.58, 65.07, 'H'];
        } else if (tw <= 68.1) {
          return [65.07, 68.1, 'VH'];
        }
      }
    }
  }
  if (part === 3) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 34.95) {
          return [19.95, 34.95, 'VL'];
        } else if (tw <= 42.45) {
          return [34.95, 42.45, 'L'];
        } else if (tw <= 47.45) {
          return [42.45, 47.45, 'NL'];
        } else if (tw <= 54.95) {
          return [47.45, 54.95, 'N'];
        } else if (tw <= 57.45) {
          return [54.95, 57.45, 'NH'];
        } else if (tw <= 64.95) {
          return [57.45, 64.95, 'H'];
        } else if (tw <= 69.95) {
          return [64.95, 69.95, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.07) {
          return [22.86, 34.07, 'VL'];
        } else if (tw <= 40.9) {
          return [34.07, 40.9, 'L'];
        } else if (tw <= 48.63) {
          return [40.9, 48.63, 'NL'];
        } else if (tw <= 53.79) {
          return [48.63, 53.79, 'N'];
        } else if (tw <= 56.37) {
          return [53.79, 56.37, 'NH'];
        } else if (tw <= 65.77) {
          return [56.37, 65.77, 'H'];
        } else if (tw <= 74.41) {
          return [65.77, 74.41, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 34.95) {
          return [19.95, 34.95, 'VL'];
        } else if (tw <= 42.45) {
          return [34.95, 42.45, 'L'];
        } else if (tw <= 47.45) {
          return [42.45, 47.45, 'NL'];
        } else if (tw <= 54.95) {
          return [47.45, 54.95, 'N'];
        } else if (tw <= 57.45) {
          return [54.95, 57.45, 'NH'];
        } else if (tw <= 64.95) {
          return [57.45, 64.95, 'H'];
        } else if (tw <= 69.95) {
          return [64.95, 69.95, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.07) {
          return [22.86, 34.07, 'VL'];
        } else if (tw <= 40.9) {
          return [34.07, 40.9, 'L'];
        } else if (tw <= 48.63) {
          return [40.9, 48.63, 'NL'];
        } else if (tw <= 53.79) {
          return [48.63, 53.79, 'N'];
        } else if (tw <= 56.37) {
          return [53.79, 56.37, 'NH'];
        } else if (tw <= 65.77) {
          return [56.37, 65.77, 'H'];
        } else if (tw <= 74.41) {
          return [65.77, 74.41, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 35.31) {
          return [16.61, 35.31, 'VL'];
        } else if (tw <= 43.31) {
          return [35.31, 43.31, 'L'];
        } else if (tw <= 45.97) {
          return [43.31, 45.97, 'NL'];
        } else if (tw <= 53.97) {
          return [45.97, 53.97, 'N'];
        } else if (tw <= 59.31) {
          return [53.97, 59.31, 'NH'];
        } else if (tw <= 67.31) {
          return [59.31, 67.31, 'H'];
        } else if (tw <= 70.0) {
          return [67.31, 70.0, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.63) {
          return [20.9, 34.63, 'VL'];
        } else if (tw <= 42.89) {
          return [34.63, 42.89, 'L'];
        } else if (tw <= 48.4) {
          return [42.89, 48.4, 'NL'];
        } else if (tw <= 53.91) {
          return [48.4, 53.91, 'N'];
        } else if (tw <= 59.42) {
          return [53.91, 59.42, 'NH'];
        } else if (tw <= 64.93) {
          return [59.42, 64.93, 'H'];
        } else if (tw <= 75.93) {
          return [64.93, 75.93, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 33.59) {
          return [11.05, 33.59, 'VL'];
        } else if (tw <= 42.06) {
          return [33.59, 42.06, 'L'];
        } else if (tw <= 47.71) {
          return [42.06, 47.71, 'NL'];
        } else if (tw <= 53.36) {
          return [47.71, 53.36, 'N'];
        } else if (tw <= 59.01) {
          return [53.36, 59.01, 'NH'];
        } else if (tw <= 64.66) {
          return [59.01, 64.66, 'H'];
        } else if (tw <= 67.47) {
          return [64.66, 67.47, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.16) {
          return [18.78, 35.16, 'VL'];
        } else if (tw <= 40.63) {
          return [35.16, 40.63, 'L'];
        } else if (tw <= 46.09) {
          return [40.63, 46.09, 'NL'];
        } else if (tw <= 51.56) {
          return [46.09, 51.56, 'N'];
        } else if (tw <= 59.75) {
          return [51.56, 59.75, 'NH'];
        } else if (tw <= 65.22) {
          return [59.75, 65.22, 'H'];
        } else if (tw <= 73.41) {
          return [65.22, 73.41, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 35.31) {
          return [10.15, 35.31, 'VL'];
        } else if (tw <= 40.89) {
          return [35.31, 40.89, 'L'];
        } else if (tw <= 46.48) {
          return [40.89, 46.48, 'NL'];
        } else if (tw <= 54.86) {
          return [46.48, 54.86, 'N'];
        } else if (tw <= 57.65) {
          return [54.86, 57.65, 'NH'];
        } else if (tw <= 66.03) {
          return [57.65, 66.03, 'H'];
        } else if (tw <= 69.05) {
          return [66.03, 69.05, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.35) {
          return [16.57, 33.35, 'VL'];
        } else if (tw <= 41.73) {
          return [33.35, 41.73, 'L'];
        } else if (tw <= 47.32) {
          return [41.73, 47.32, 'NL'];
        } else if (tw <= 52.91) {
          return [47.32, 52.91, 'N'];
        } else if (tw <= 58.49) {
          return [52.91, 58.49, 'NH'];
        } else if (tw <= 64.08) {
          return [58.49, 64.08, 'H'];
        } else if (tw <= 72.45) {
          return [64.08, 72.45, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 34.52) {
          return [13.05, 34.52, 'VL'];
        } else if (tw <= 42.58) {
          return [34.52, 42.58, 'L'];
        } else if (tw <= 45.27) {
          return [42.58, 45.27, 'NL'];
        } else if (tw <= 53.33) {
          return [45.27, 53.33, 'N'];
        } else if (tw <= 58.71) {
          return [53.33, 58.71, 'NH'];
        } else if (tw <= 66.77) {
          return [58.71, 66.77, 'H'];
        } else if (tw <= 69.75) {
          return [66.77, 69.75, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 32.78) {
          return [19.66, 32.78, 'VL'];
        } else if (tw <= 43.28) {
          return [32.78, 43.28, 'L'];
        } else if (tw <= 45.91) {
          return [43.28, 45.91, 'NL'];
        } else if (tw <= 53.78) {
          return [45.91, 53.78, 'N'];
        } else if (tw <= 59.03) {
          return [53.78, 59.03, 'NH'];
        } else if (tw <= 64.28) {
          return [59.03, 64.28, 'H'];
        } else if (tw <= 72.15) {
          return [64.28, 72.15, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 33.51) {
          return [12.02, 33.51, 'VL'];
        } else if (tw <= 41.55) {
          return [33.51, 41.55, 'L'];
        } else if (tw <= 46.92) {
          return [41.55, 46.92, 'NL'];
        } else if (tw <= 54.96) {
          return [46.92, 54.96, 'N'];
        } else if (tw <= 60.32) {
          return [54.96, 60.32, 'NH'];
        } else if (tw <= 65.68) {
          return [60.32, 65.68, 'H'];
        } else if (tw <= 68.69) {
          return [65.68, 68.69, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.7) {
          return [21.04, 35.7, 'VL'];
        } else if (tw <= 40.59) {
          return [35.7, 40.59, 'L'];
        } else if (tw <= 47.92) {
          return [40.59, 47.92, 'NL'];
        } else if (tw <= 52.81) {
          return [47.92, 52.81, 'N'];
        } else if (tw <= 57.7) {
          return [52.81, 57.7, 'NH'];
        } else if (tw <= 66.87) {
          return [57.7, 66.87, 'H'];
        } else if (tw <= 69.92) {
          return [66.87, 69.92, 'VH'];
        }
      }
    }
  }
  if (part === 4) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 35.37) {
          return [23.98, 35.37, 'VL'];
        } else if (tw <= 41.78) {
          return [35.37, 41.78, 'L'];
        } else if (tw <= 47.72) {
          return [41.78, 47.72, 'NL'];
        } else if (tw <= 53.65) {
          return [47.72, 53.65, 'N'];
        } else if (tw <= 58.4) {
          return [53.65, 58.4, 'NH'];
        } else if (tw <= 65.52) {
          return [58.4, 65.52, 'H'];
        } else if (tw <= 71.45) {
          return [65.52, 71.45, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.9) {
          return [9.2, 34.9, 'VL'];
        } else if (tw <= 40.66) {
          return [34.9, 40.66, 'L'];
        } else if (tw <= 47.66) {
          return [40.66, 47.66, 'NL'];
        } else if (tw <= 54.65) {
          return [47.66, 54.65, 'N'];
        } else if (tw <= 58.15) {
          return [54.65, 58.15, 'NH'];
        } else if (tw <= 65.14) {
          return [58.15, 65.14, 'H'];
        } else if (tw <= 68.14) {
          return [65.14, 68.14, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 35.37) {
          return [23.98, 35.37, 'VL'];
        } else if (tw <= 41.78) {
          return [35.37, 41.78, 'L'];
        } else if (tw <= 47.72) {
          return [41.78, 47.72, 'NL'];
        } else if (tw <= 53.65) {
          return [47.72, 53.65, 'N'];
        } else if (tw <= 58.4) {
          return [53.65, 58.4, 'NH'];
        } else if (tw <= 65.52) {
          return [58.4, 65.52, 'H'];
        } else if (tw <= 71.45) {
          return [65.52, 71.45, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.9) {
          return [9.2, 34.9, 'VL'];
        } else if (tw <= 40.66) {
          return [34.9, 40.66, 'L'];
        } else if (tw <= 47.66) {
          return [40.66, 47.66, 'NL'];
        } else if (tw <= 54.65) {
          return [47.66, 54.65, 'N'];
        } else if (tw <= 58.15) {
          return [54.65, 58.15, 'NH'];
        } else if (tw <= 65.14) {
          return [58.15, 65.14, 'H'];
        } else if (tw <= 68.14) {
          return [65.14, 68.14, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 35.99) {
          return [17.83, 35.99, 'VL'];
        } else if (tw <= 43.03) {
          return [35.99, 43.03, 'L'];
        } else if (tw <= 46.18) {
          return [43.03, 46.18, 'NL'];
        } else if (tw <= 52.49) {
          return [46.18, 52.49, 'N'];
        } else if (tw <= 58.8) {
          return [52.49, 58.8, 'NH'];
        } else if (tw <= 65.11) {
          return [58.8, 65.11, 'H'];
        } else if (tw <= 68.26) {
          return [65.11, 68.26, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.17) {
          return [3.3, 33.17, 'VL'];
        } else if (tw <= 40.63) {
          return [33.17, 40.63, 'L'];
        } else if (tw <= 48.1) {
          return [40.63, 48.1, 'NL'];
        } else if (tw <= 55.56) {
          return [48.1, 55.56, 'N'];
        } else if (tw <= 59.29) {
          return [55.56, 59.29, 'NH'];
        } else if (tw <= 63.02) {
          return [59.29, 63.02, 'H'];
        } else if (tw <= 66.02) {
          return [63.02, 66.02, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 34.53) {
          return [15.8, 34.53, 'VL'];
        } else if (tw <= 40.78) {
          return [34.53, 40.78, 'L'];
        } else if (tw <= 47.03) {
          return [40.78, 47.03, 'NL'];
        } else if (tw <= 53.28) {
          return [47.03, 53.28, 'N'];
        } else if (tw <= 59.53) {
          return [53.28, 59.53, 'NH'];
        } else if (tw <= 65.78) {
          return [59.53, 65.78, 'H'];
        } else if (tw <= 68.75) {
          return [65.78, 68.75, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 32.72) {
          return [-14.32, 32.72, 'VL'];
        } else if (tw <= 42.11) {
          return [32.72, 42.11, 'L'];
        } else if (tw <= 46.81) {
          return [42.11, 46.81, 'NL'];
        } else if (tw <= 56.2) {
          return [46.81, 56.2, 'N'];
        } else if (tw <= 57.89) {
          return [56.2, 57.89, 'NH'];
        } else if (tw <= 60.89) {
          return [57.89, 60.89, 'H'];
        } else if (tw <= 63.91) {
          return [60.89, 63.91, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 34.27) {
          return [15.53, 34.27, 'VL'];
        } else if (tw <= 40.5) {
          return [34.27, 40.5, 'L'];
        } else if (tw <= 46.73) {
          return [40.5, 46.73, 'NL'];
        } else if (tw <= 52.96) {
          return [46.73, 52.96, 'N'];
        } else if (tw <= 59.19) {
          return [52.96, 59.19, 'NH'];
        } else if (tw <= 65.42) {
          return [59.19, 65.42, 'H'];
        } else if (tw <= 68.45) {
          return [65.42, 68.45, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.78) {
          return [-10.59, 33.78, 'VL'];
        } else if (tw <= 42.67) {
          return [33.78, 42.67, 'L'];
        } else if (tw <= 47.11) {
          return [42.67, 47.11, 'NL'];
        } else if (tw <= 56.0) {
          return [47.11, 56.0, 'N'];
        } else if (tw <= 57.44) {
          return [56.0, 57.44, 'NH'];
        } else if (tw <= 60.44) {
          return [57.44, 60.44, 'H'];
        } else if (tw <= 63.43) {
          return [60.44, 63.43, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 34.1) {
          return [18.91, 34.1, 'VL'];
        } else if (tw <= 40.18) {
          return [34.1, 40.18, 'L'];
        } else if (tw <= 46.26) {
          return [40.18, 46.26, 'NL'];
        } else if (tw <= 55.38) {
          return [46.26, 55.38, 'N'];
        } else if (tw <= 58.42) {
          return [55.38, 58.42, 'NH'];
        } else if (tw <= 64.5) {
          return [58.42, 64.5, 'H'];
        } else if (tw <= 67.55) {
          return [64.5, 67.55, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 32.33) {
          return [-3.86, 32.33, 'VL'];
        } else if (tw <= 40.36) {
          return [32.33, 40.36, 'L'];
        } else if (tw <= 48.39) {
          return [40.36, 48.39, 'NL'];
        } else if (tw <= 56.43) {
          return [48.39, 56.43, 'N'];
        } else if (tw <= 57.44) {
          return [56.43, 57.44, 'NH'];
        } else if (tw <= 60.44) {
          return [57.44, 60.44, 'H'];
        } else if (tw <= 63.43) {
          return [60.44, 63.43, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 33.43) {
          return [18.1, 33.43, 'VL'];
        } else if (tw <= 42.6) {
          return [33.43, 42.6, 'L'];
        } else if (tw <= 45.66) {
          return [42.6, 45.66, 'NL'];
        } else if (tw <= 51.77) {
          return [45.66, 51.77, 'N'];
        } else if (tw <= 60.95) {
          return [51.77, 60.95, 'NH'];
        } else if (tw <= 67.06) {
          return [60.95, 67.06, 'H'];
        } else if (tw <= 70.07) {
          return [67.06, 70.07, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.44) {
          return [-1.9, 34.44, 'VL'];
        } else if (tw <= 42.5) {
          return [34.44, 42.5, 'L'];
        } else if (tw <= 46.53) {
          return [42.5, 46.53, 'NL'];
        } else if (tw <= 54.6) {
          return [46.53, 54.6, 'N'];
        } else if (tw <= 58.63) {
          return [54.6, 58.63, 'NH'];
        } else if (tw <= 62.66) {
          return [58.63, 62.66, 'H'];
        } else if (tw <= 65.66) {
          return [62.66, 65.66, 'VH'];
        }
      }
    }
  }
  if (part === 5) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 35.2) {
          return [16.65, 35.2, 'VL'];
        } else if (tw <= 42.19) {
          return [35.2, 42.19, 'L'];
        } else if (tw <= 46.85) {
          return [42.19, 46.85, 'NL'];
        } else if (tw <= 51.52) {
          return [46.85, 51.52, 'N'];
        } else if (tw <= 58.51) {
          return [51.52, 58.51, 'NH'];
        } else if (tw <= 65.5) {
          return [58.51, 65.5, 'H'];
        } else if (tw <= 72.49) {
          return [65.5, 72.49, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.84) {
          return [15.7, 35.84, 'VL'];
        } else if (tw <= 42.55) {
          return [35.84, 42.55, 'L'];
        } else if (tw <= 47.02) {
          return [42.55, 47.02, 'NL'];
        } else if (tw <= 52.9) {
          return [47.02, 52.9, 'N'];
        } else if (tw <= 58.21) {
          return [52.9, 58.21, 'NH'];
        } else if (tw <= 64.92) {
          return [58.21, 64.92, 'H'];
        } else if (tw <= 69.4) {
          return [64.92, 69.4, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 35.2) {
          return [16.65, 35.2, 'VL'];
        } else if (tw <= 42.19) {
          return [35.2, 42.19, 'L'];
        } else if (tw <= 46.85) {
          return [42.19, 46.85, 'NL'];
        } else if (tw <= 51.52) {
          return [46.85, 51.52, 'N'];
        } else if (tw <= 58.51) {
          return [51.52, 58.51, 'NH'];
        } else if (tw <= 65.5) {
          return [58.51, 65.5, 'H'];
        } else if (tw <= 72.49) {
          return [65.5, 72.49, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.84) {
          return [15.7, 35.84, 'VL'];
        } else if (tw <= 42.55) {
          return [35.84, 42.55, 'L'];
        } else if (tw <= 47.02) {
          return [42.55, 47.02, 'NL'];
        } else if (tw <= 52.9) {
          return [47.02, 52.9, 'N'];
        } else if (tw <= 58.21) {
          return [52.9, 58.21, 'NH'];
        } else if (tw <= 64.92) {
          return [58.21, 64.92, 'H'];
        } else if (tw <= 69.4) {
          return [64.92, 69.4, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 36.32) {
          return [10.79, 36.32, 'VL'];
        } else if (tw <= 41.43) {
          return [36.32, 41.43, 'L'];
        } else if (tw <= 46.55) {
          return [41.43, 46.55, 'NL'];
        } else if (tw <= 54.22) {
          return [46.55, 54.22, 'N'];
        } else if (tw <= 56.78) {
          return [54.22, 56.78, 'NH'];
        } else if (tw <= 64.45) {
          return [56.78, 64.45, 'H'];
        } else if (tw <= 72.1) {
          return [64.45, 72.1, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.89) {
          return [7.86, 36.89, 'VL'];
        } else if (tw <= 42.16) {
          return [36.89, 42.16, 'L'];
        } else if (tw <= 47.44) {
          return [42.16, 47.44, 'NL'];
        } else if (tw <= 52.72) {
          return [47.44, 52.72, 'N'];
        } else if (tw <= 57.99) {
          return [52.72, 57.99, 'NH'];
        } else if (tw <= 65.91) {
          return [57.99, 65.91, 'H'];
        } else if (tw <= 71.18) {
          return [65.91, 71.18, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 34.76) {
          return [9.01, 34.76, 'VL'];
        } else if (tw <= 42.47) {
          return [34.76, 42.47, 'L'];
        } else if (tw <= 47.61) {
          return [42.47, 47.61, 'NL'];
        } else if (tw <= 52.75) {
          return [47.61, 52.75, 'N'];
        } else if (tw <= 57.89) {
          return [52.75, 57.89, 'NH'];
        } else if (tw <= 65.6) {
          return [57.89, 65.6, 'H'];
        } else if (tw <= 70.78) {
          return [65.6, 70.78, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.7) {
          return [2.36, 36.7, 'VL'];
        } else if (tw <= 42.44) {
          return [36.7, 42.44, 'L'];
        } else if (tw <= 45.3) {
          return [42.44, 45.3, 'NL'];
        } else if (tw <= 53.9) {
          return [45.3, 53.9, 'N'];
        } else if (tw <= 59.63) {
          return [53.9, 59.63, 'NH'];
        } else if (tw <= 65.36) {
          return [59.63, 65.36, 'H'];
        } else if (tw <= 71.08) {
          return [65.36, 71.08, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 36.42) {
          return [6.89, 36.42, 'VL'];
        } else if (tw <= 41.8) {
          return [36.42, 41.8, 'L'];
        } else if (tw <= 47.18) {
          return [41.8, 47.18, 'NL'];
        } else if (tw <= 52.55) {
          return [47.18, 52.55, 'N'];
        } else if (tw <= 57.93) {
          return [52.55, 57.93, 'NH'];
        } else if (tw <= 65.99) {
          return [57.93, 65.99, 'H'];
        } else if (tw <= 71.37) {
          return [65.99, 71.37, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.34) {
          return [4.16, 34.34, 'VL'];
        } else if (tw <= 42.58) {
          return [34.34, 42.58, 'L'];
        } else if (tw <= 48.08) {
          return [42.58, 48.08, 'NL'];
        } else if (tw <= 53.57) {
          return [48.08, 53.57, 'N'];
        } else if (tw <= 59.07) {
          return [53.57, 59.07, 'NH'];
        } else if (tw <= 64.56) {
          return [59.07, 64.56, 'H'];
        } else if (tw <= 70.04) {
          return [64.56, 70.04, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 36.38) {
          return [4.72, 36.38, 'VL'];
        } else if (tw <= 42.13) {
          return [36.38, 42.13, 'L'];
        } else if (tw <= 47.87) {
          return [42.13, 47.87, 'NL'];
        } else if (tw <= 53.62) {
          return [47.87, 53.62, 'N'];
        } else if (tw <= 56.49) {
          return [53.62, 56.49, 'NH'];
        } else if (tw <= 65.11) {
          return [56.49, 65.11, 'H'];
        } else if (tw <= 73.78) {
          return [65.11, 73.78, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.2) {
          return [6.35, 35.2, 'VL'];
        } else if (tw <= 40.45) {
          return [35.2, 40.45, 'L'];
        } else if (tw <= 45.7) {
          return [40.45, 45.7, 'NL'];
        } else if (tw <= 53.57) {
          return [45.7, 53.57, 'N'];
        } else if (tw <= 58.82) {
          return [53.57, 58.82, 'NH'];
        } else if (tw <= 64.07) {
          return [58.82, 64.07, 'H'];
        } else if (tw <= 69.32) {
          return [64.07, 69.32, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 35.12) {
          return [10.41, 35.12, 'VL'];
        } else if (tw <= 40.07) {
          return [35.12, 40.07, 'L'];
        } else if (tw <= 47.5) {
          return [40.07, 47.5, 'NL'];
        } else if (tw <= 52.45) {
          return [47.5, 52.45, 'N'];
        } else if (tw <= 57.4) {
          return [52.45, 57.4, 'NH'];
        } else if (tw <= 64.83) {
          return [57.4, 64.83, 'H'];
        } else if (tw <= 69.77) {
          return [64.83, 69.77, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.37) {
          return [9.52, 36.37, 'VL'];
        } else if (tw <= 41.24) {
          return [36.37, 41.24, 'L'];
        } else if (tw <= 48.56) {
          return [41.24, 48.56, 'NL'];
        } else if (tw <= 53.44) {
          return [48.56, 53.44, 'N'];
        } else if (tw <= 58.32) {
          return [53.44, 58.32, 'NH'];
        } else if (tw <= 65.02) {
          return [58.32, 65.02, 'H'];
        } else if (tw <= 68.08) {
          return [65.02, 68.08, 'VH'];
        }
      }
    }
  }
  if (part === 6) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 38.07) {
          return [34.95, 38.07, 'VL'];
        } else if (tw <= 41.18) {
          return [38.07, 41.18, 'L'];
        } else if (tw <= 44.3) {
          return [41.18, 44.3, 'NL'];
        } else if (tw <= 53.64) {
          return [44.3, 53.64, 'N'];
        } else if (tw <= 56.76) {
          return [53.64, 56.76, 'NH'];
        } else if (tw <= 66.11) {
          return [56.76, 66.11, 'H'];
        } else if (tw <= 84.8) {
          return [66.11, 84.8, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 37.31) {
          return [34.03, 37.31, 'VL'];
        } else if (tw <= 40.59) {
          return [37.31, 40.59, 'L'];
        } else if (tw <= 47.15) {
          return [40.59, 47.15, 'NL'];
        } else if (tw <= 53.7) {
          return [47.15, 53.7, 'N'];
        } else if (tw <= 60.26) {
          return [53.7, 60.26, 'NH'];
        } else if (tw <= 66.82) {
          return [60.26, 66.82, 'H'];
        } else if (tw <= 86.49) {
          return [66.82, 86.49, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 38.07) {
          return [34.95, 38.07, 'VL'];
        } else if (tw <= 41.18) {
          return [38.07, 41.18, 'L'];
        } else if (tw <= 44.3) {
          return [41.18, 44.3, 'NL'];
        } else if (tw <= 53.64) {
          return [44.3, 53.64, 'N'];
        } else if (tw <= 56.76) {
          return [53.64, 56.76, 'NH'];
        } else if (tw <= 66.11) {
          return [56.76, 66.11, 'H'];
        } else if (tw <= 84.8) {
          return [66.11, 84.8, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 37.31) {
          return [34.03, 37.31, 'VL'];
        } else if (tw <= 40.59) {
          return [37.31, 40.59, 'L'];
        } else if (tw <= 47.15) {
          return [40.59, 47.15, 'NL'];
        } else if (tw <= 53.7) {
          return [47.15, 53.7, 'N'];
        } else if (tw <= 60.26) {
          return [53.7, 60.26, 'NH'];
        } else if (tw <= 66.82) {
          return [60.26, 66.82, 'H'];
        } else if (tw <= 86.49) {
          return [66.82, 86.49, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 34.41) {
          return [29.21, 34.41, 'VL'];
        } else if (tw <= 42.25) {
          return [34.41, 42.25, 'L'];
        } else if (tw <= 47.47) {
          return [42.25, 47.47, 'NL'];
        } else if (tw <= 52.69) {
          return [47.47, 52.69, 'N'];
        } else if (tw <= 60.52) {
          return [52.69, 60.52, 'NH'];
        } else if (tw <= 65.74) {
          return [60.52, 65.74, 'H'];
        } else if (tw <= 70.94) {
          return [65.74, 70.94, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.76) {
          return [27.85, 35.76, 'VL'];
        } else if (tw <= 41.03) {
          return [35.76, 41.03, 'L'];
        } else if (tw <= 46.29) {
          return [41.03, 46.29, 'NL'];
        } else if (tw <= 54.18) {
          return [46.29, 54.18, 'N'];
        } else if (tw <= 59.45) {
          return [54.18, 59.45, 'NH'];
        } else if (tw <= 64.71) {
          return [59.45, 64.71, 'H'];
        } else if (tw <= 69.99) {
          return [64.71, 69.99, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 35.24) {
          return [21.79, 35.24, 'VL'];
        } else if (tw <= 40.62) {
          return [35.24, 40.62, 'L'];
        } else if (tw <= 45.99) {
          return [40.62, 45.99, 'NL'];
        } else if (tw <= 54.06) {
          return [45.99, 54.06, 'N'];
        } else if (tw <= 59.44) {
          return [54.06, 59.44, 'NH'];
        } else if (tw <= 64.81) {
          return [59.44, 64.81, 'H'];
        } else if (tw <= 67.83) {
          return [64.81, 67.83, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 32.62) {
          return [18.13, 32.62, 'VL'];
        } else if (tw <= 41.34) {
          return [32.62, 41.34, 'L'];
        } else if (tw <= 47.15) {
          return [41.34, 47.15, 'NL'];
        } else if (tw <= 55.87) {
          return [47.15, 55.87, 'N'];
        } else if (tw <= 58.78) {
          return [55.87, 58.78, 'NH'];
        } else if (tw <= 64.59) {
          return [58.78, 64.59, 'H'];
        } else if (tw <= 67.58) {
          return [64.59, 67.58, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 31.4) {
          return [11.47, 31.4, 'VL'];
        } else if (tw <= 41.36) {
          return [31.4, 41.36, 'L'];
        } else if (tw <= 48.01) {
          return [41.36, 48.01, 'NL'];
        } else if (tw <= 54.65) {
          return [48.01, 54.65, 'N'];
        } else if (tw <= 57.97) {
          return [54.65, 57.97, 'NH'];
        } else if (tw <= 62.26) {
          return [57.97, 62.26, 'H'];
        } else if (tw <= 64.6) {
          return [62.26, 64.6, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.08) {
          return [2.95, 33.08, 'VL'];
        } else if (tw <= 44.36) {
          return [33.08, 44.36, 'L'];
        } else if (tw <= 48.12) {
          return [44.36, 48.12, 'NL'];
        } else if (tw <= 55.64) {
          return [48.12, 55.64, 'N'];
        } else if (tw <= 59.4) {
          return [55.64, 59.4, 'NH'];
        } else if (tw <= 63.16) {
          return [59.4, 63.16, 'H'];
        } else if (tw <= 66.16) {
          return [63.16, 66.16, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 35.99) {
          return [-1.99, 35.99, 'VL'];
        } else if (tw <= 40.21) {
          return [35.99, 40.21, 'L'];
        } else if (tw <= 48.65) {
          return [40.21, 48.65, 'NL'];
        } else if (tw <= 52.87) {
          return [48.65, 52.87, 'N'];
        } else if (tw <= 57.09) {
          return [52.87, 57.09, 'NH'];
        } else if (tw <= 61.31) {
          return [57.09, 61.31, 'H'];
        } else if (tw <= 65.54) {
          return [61.31, 65.54, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 31.67) {
          return [-8.94, 31.67, 'VL'];
        } else if (tw <= 40.68) {
          return [31.67, 40.68, 'L'];
        } else if (tw <= 45.18) {
          return [40.68, 45.18, 'NL'];
        } else if (tw <= 54.19) {
          return [45.18, 54.19, 'N'];
        } else if (tw <= 58.69) {
          return [54.19, 58.69, 'NH'];
        } else if (tw <= 63.2) {
          return [58.69, 63.2, 'H'];
        } else if (tw <= 66.2) {
          return [63.2, 66.2, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 34.02) {
          return [4.0, 34.02, 'VL'];
        } else if (tw <= 41.54) {
          return [34.02, 41.54, 'L'];
        } else if (tw <= 49.06) {
          return [41.54, 49.06, 'NL'];
        } else if (tw <= 52.82) {
          return [49.06, 52.82, 'N'];
        } else if (tw <= 60.34) {
          return [52.82, 60.34, 'NH'];
        } else if (tw <= 64.1) {
          return [60.34, 64.1, 'H'];
        } else if (tw <= 67.07) {
          return [64.1, 67.07, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.12) {
          return [-6.92, 36.12, 'VL'];
        } else if (tw <= 44.74) {
          return [36.12, 44.74, 'L'];
        } else if (tw <= 49.05) {
          return [44.74, 49.05, 'NL'];
        } else if (tw <= 53.36) {
          return [49.05, 53.36, 'N'];
        } else if (tw <= 57.67) {
          return [53.36, 57.67, 'NH'];
        } else if (tw <= 61.98) {
          return [57.67, 61.98, 'H'];
        } else if (tw <= 64.96) {
          return [61.98, 64.96, 'VH'];
        }
      }
    }
  }
  if (part === 7) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 35.07) {
          return [17.37, 35.07, 'VL'];
        } else if (tw <= 40.97) {
          return [35.07, 40.97, 'L'];
        } else if (tw <= 46.87) {
          return [40.97, 46.87, 'NL'];
        } else if (tw <= 52.77) {
          return [46.87, 52.77, 'N'];
        } else if (tw <= 58.67) {
          return [52.77, 58.67, 'NH'];
        } else if (tw <= 64.57) {
          return [58.67, 64.57, 'H'];
        } else if (tw <= 67.57) {
          return [64.57, 67.57, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.56) {
          return [15.84, 35.56, 'VL'];
        } else if (tw <= 40.68) {
          return [35.56, 40.68, 'L'];
        } else if (tw <= 46.89) {
          return [40.68, 46.89, 'NL'];
        } else if (tw <= 53.11) {
          return [46.89, 53.11, 'N'];
        } else if (tw <= 59.32) {
          return [53.11, 59.32, 'NH'];
        } else if (tw <= 65.53) {
          return [59.32, 65.53, 'H'];
        } else if (tw <= 68.53) {
          return [65.53, 68.53, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 35.07) {
          return [17.37, 35.07, 'VL'];
        } else if (tw <= 40.97) {
          return [35.07, 40.97, 'L'];
        } else if (tw <= 46.87) {
          return [40.97, 46.87, 'NL'];
        } else if (tw <= 52.77) {
          return [46.87, 52.77, 'N'];
        } else if (tw <= 58.67) {
          return [52.77, 58.67, 'NH'];
        } else if (tw <= 64.57) {
          return [58.67, 64.57, 'H'];
        } else if (tw <= 67.57) {
          return [64.57, 67.57, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.56) {
          return [15.84, 35.56, 'VL'];
        } else if (tw <= 40.68) {
          return [35.56, 40.68, 'L'];
        } else if (tw <= 46.89) {
          return [40.68, 46.89, 'NL'];
        } else if (tw <= 53.11) {
          return [46.89, 53.11, 'N'];
        } else if (tw <= 59.32) {
          return [53.11, 59.32, 'NH'];
        } else if (tw <= 65.53) {
          return [59.32, 65.53, 'H'];
        } else if (tw <= 68.53) {
          return [65.53, 68.53, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 33.47) {
          return [13.48, 33.47, 'VL'];
        } else if (tw <= 40.13) {
          return [33.47, 40.13, 'L'];
        } else if (tw <= 46.8) {
          return [40.13, 46.8, 'NL'];
        } else if (tw <= 53.47) {
          return [46.8, 53.47, 'N'];
        } else if (tw <= 60.13) {
          return [53.47, 60.13, 'NH'];
        } else if (tw <= 63.47) {
          return [60.13, 63.47, 'H'];
        } else if (tw <= 66.78) {
          return [63.47, 66.78, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.43) {
          return [10.02, 34.43, 'VL'];
        } else if (tw <= 41.39) {
          return [34.43, 41.39, 'L'];
        } else if (tw <= 48.36) {
          return [41.39, 48.36, 'NL'];
        } else if (tw <= 51.85) {
          return [48.36, 51.85, 'N'];
        } else if (tw <= 58.82) {
          return [51.85, 58.82, 'NH'];
        } else if (tw <= 65.78) {
          return [58.82, 65.78, 'H'];
        } else if (tw <= 68.8) {
          return [65.78, 68.8, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 35.18) {
          return [11.91, 35.18, 'VL'];
        } else if (tw <= 41.83) {
          return [35.18, 41.83, 'L'];
        } else if (tw <= 48.47) {
          return [41.83, 48.47, 'NL'];
        } else if (tw <= 51.79) {
          return [48.47, 51.79, 'N'];
        } else if (tw <= 58.44) {
          return [51.79, 58.44, 'NH'];
        } else if (tw <= 65.08) {
          return [58.44, 65.08, 'H'];
        } else if (tw <= 68.07) {
          return [65.08, 68.07, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.01) {
          return [7.15, 36.01, 'VL'];
        } else if (tw <= 43.2) {
          return [36.01, 43.2, 'L'];
        } else if (tw <= 46.8) {
          return [43.2, 46.8, 'NL'];
        } else if (tw <= 53.99) {
          return [46.8, 53.99, 'N'];
        } else if (tw <= 57.59) {
          return [53.99, 57.59, 'NH'];
        } else if (tw <= 64.78) {
          return [57.59, 64.78, 'H'];
        } else if (tw <= 68.8) {
          return [64.78, 68.8, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 32.95) {
          return [13.71, 32.95, 'VL'];
        } else if (tw <= 42.56) {
          return [32.95, 42.56, 'L'];
        } else if (tw <= 48.97) {
          return [42.56, 48.97, 'NL'];
        } else if (tw <= 52.58) {
          return [48.97, 52.58, 'N'];
        } else if (tw <= 58.59) {
          return [52.58, 58.59, 'NH'];
        } else if (tw <= 65.0) {
          return [58.59, 65.0, 'H'];
        } else if (tw <= 68.02) {
          return [65.0, 68.02, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 33.61) {
          return [9.1, 33.61, 'VL'];
        } else if (tw <= 40.63) {
          return [33.61, 40.63, 'L'];
        } else if (tw <= 47.65) {
          return [40.63, 47.65, 'NL'];
        } else if (tw <= 51.16) {
          return [47.65, 51.16, 'N'];
        } else if (tw <= 58.18) {
          return [51.16, 58.18, 'NH'];
        } else if (tw <= 65.19) {
          return [58.18, 65.19, 'H'];
        } else if (tw <= 68.18) {
          return [65.19, 68.18, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 36.63) {
          return [11.55, 36.63, 'VL'];
        } else if (tw <= 40.22) {
          return [36.63, 40.22, 'L'];
        } else if (tw <= 47.38) {
          return [40.22, 47.38, 'NL'];
        } else if (tw <= 54.55) {
          return [47.38, 54.55, 'N'];
        } else if (tw <= 58.14) {
          return [54.55, 58.14, 'NH'];
        } else if (tw <= 65.3) {
          return [58.14, 65.3, 'H'];
        } else if (tw <= 68.86) {
          return [65.3, 68.86, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.53) {
          return [6.97, 36.53, 'VL'];
        } else if (tw <= 40.22) {
          return [36.53, 40.22, 'L'];
        } else if (tw <= 47.6) {
          return [40.22, 47.6, 'NL'];
        } else if (tw <= 53.6) {
          return [47.6, 53.6, 'N'];
        } else if (tw <= 58.67) {
          return [53.6, 58.67, 'NH'];
        } else if (tw <= 66.05) {
          return [58.67, 66.05, 'H'];
        } else if (tw <= 69.05) {
          return [66.05, 69.05, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 35.82) {
          return [17.26, 35.82, 'VL'];
        } else if (tw <= 42.01) {
          return [35.82, 42.01, 'L'];
        } else if (tw <= 45.11) {
          return [42.01, 45.11, 'NL'];
        } else if (tw <= 54.4) {
          return [45.11, 54.4, 'N'];
        } else if (tw <= 60.59) {
          return [54.4, 60.59, 'NH'];
        } else if (tw <= 66.78) {
          return [60.59, 66.78, 'H'];
        } else if (tw <= 69.79) {
          return [66.78, 69.79, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.51) {
          return [11.84, 35.51, 'VL'];
        } else if (tw <= 42.26) {
          return [35.51, 42.26, 'L'];
        } else if (tw <= 49.02) {
          return [42.26, 49.02, 'NL'];
        } else if (tw <= 52.4) {
          return [49.02, 52.4, 'N'];
        } else if (tw <= 59.16) {
          return [52.4, 59.16, 'NH'];
        } else if (tw <= 65.91) {
          return [59.16, 65.91, 'H'];
        } else if (tw <= 68.92) {
          return [65.91, 68.92, 'VH'];
        }
      }
    }
  }
  if (part === 8) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 36.23) {
          return [15.47, 36.23, 'VL'];
        } else if (tw <= 43.15) {
          return [36.23, 43.15, 'L'];
        } else if (tw <= 46.61) {
          return [43.15, 46.61, 'NL'];
        } else if (tw <= 53.53) {
          return [46.61, 53.53, 'N'];
        } else if (tw <= 56.99) {
          return [53.53, 56.99, 'NH'];
        } else if (tw <= 67.37) {
          return [56.99, 67.37, 'H'];
        } else if (tw <= 70.83) {
          return [67.37, 70.83, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 32.82) {
          return [16.21, 32.82, 'VL'];
        } else if (tw <= 42.79) {
          return [32.82, 42.79, 'L'];
        } else if (tw <= 47.36) {
          return [42.79, 47.36, 'NL'];
        } else if (tw <= 52.76) {
          return [47.36, 52.76, 'N'];
        } else if (tw <= 56.08) {
          return [52.76, 56.08, 'NH'];
        } else if (tw <= 66.05) {
          return [56.08, 66.05, 'H'];
        } else if (tw <= 69.37) {
          return [66.05, 69.37, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 36.23) {
          return [15.47, 36.23, 'VL'];
        } else if (tw <= 43.15) {
          return [36.23, 43.15, 'L'];
        } else if (tw <= 46.61) {
          return [43.15, 46.61, 'NL'];
        } else if (tw <= 53.53) {
          return [46.61, 53.53, 'N'];
        } else if (tw <= 56.99) {
          return [53.53, 56.99, 'NH'];
        } else if (tw <= 67.37) {
          return [56.99, 67.37, 'H'];
        } else if (tw <= 70.83) {
          return [67.37, 70.83, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 32.82) {
          return [16.21, 32.82, 'VL'];
        } else if (tw <= 42.79) {
          return [32.82, 42.79, 'L'];
        } else if (tw <= 47.36) {
          return [42.79, 47.36, 'NL'];
        } else if (tw <= 52.76) {
          return [47.36, 52.76, 'N'];
        } else if (tw <= 56.08) {
          return [52.76, 56.08, 'NH'];
        } else if (tw <= 66.05) {
          return [56.08, 66.05, 'H'];
        } else if (tw <= 69.37) {
          return [66.05, 69.37, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 35.48) {
          return [13.39, 35.48, 'VL'];
        } else if (tw <= 42.83) {
          return [35.48, 42.83, 'L'];
        } else if (tw <= 46.51) {
          return [42.83, 46.51, 'NL'];
        } else if (tw <= 53.86) {
          return [46.51, 53.86, 'N'];
        } else if (tw <= 57.74) {
          //이상
          return [53.86, 57.74, 'NH'];
        } else if (tw <= 64.89) {
          return [57.54, 64.89, 'H'];
        } else if (tw <= 72.24) {
          return [64.89, 72.24, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.07) {
          return [13.13, 35.07, 'VL'];
        } else if (tw <= 42.37) {
          return [35.07, 42.37, 'L'];
        } else if (tw <= 46.02) {
          return [42.37, 46.02, 'NL'];
        } else if (tw <= 53.32) {
          return [46.02, 53.32, 'N'];
        } else if (tw <= 56.97) {
          return [53.32, 56.97, 'NH'];
        } else if (tw <= 64.27) {
          return [56.97, 64.27, 'H'];
        } else if (tw <= 71.6) {
          return [64.27, 71.6, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 34.1) {
          return [12.57, 34.1, 'VL'];
        } else if (tw <= 41.29) {
          return [34.1, 41.29, 'L'];
        } else if (tw <= 48.49) {
          return [41.29, 48.49, 'NL'];
        } else if (tw <= 52.09) {
          return [48.49, 52.09, 'N'];
        } else if (tw <= 59.28) {
          return [52.09, 59.28, 'NH'];
        } else if (tw <= 62.88) {
          return [59.28, 62.88, 'H'];
        } else if (tw <= 70.04) {
          return [62.88, 70.04, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.78) {
          return [12.03, 36.78, 'VL'];
        } else if (tw <= 40.32) {
          return [36.78, 40.32, 'L'];
        } else if (tw <= 47.39) {
          return [40.32, 47.39, 'NL'];
        } else if (tw <= 54.4) {
          return [47.39, 54.45, 'N'];
        } else if (tw <= 57.99) {
          return [54.45, 57.99, 'NH'];
        } else if (tw <= 65.05) {
          return [57.99, 65.05, 'H'];
        } else if (tw <= 68.62) {
          return [65.05, 68.62, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 34.68) {
          return [13.13, 34.68, 'VL'];
        } else if (tw <= 41.87) {
          return [34.68, 41.87, 'L'];
        } else if (tw <= 45.47) {
          return [41.87, 45.47, 'NL'];
        } else if (tw <= 52.66) {
          return [45.47, 52.66, 'N'];
        } else if (tw <= 59.86) {
          return [52.66, 59.86, 'NH'];
        } else if (tw <= 63.45) {
          return [59.86, 63.45, 'H'];
        } else if (tw <= 70.62) {
          return [63.45, 70.62, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.82) {
          return [10.31, 35.82, 'VL'];
        } else if (tw <= 39.45) {
          return [35.82, 39.45, 'L'];
        } else if (tw <= 46.73) {
          return [39.45, 46.73, 'NL'];
        } else if (tw <= 54.0) {
          return [46.73, 54.0, 'N'];
        } else if (tw <= 57.64) {
          return [54.0, 57.64, 'NH'];
        } else if (tw <= 64.91) {
          return [57.64, 64.91, 'H'];
        } else if (tw <= 68.59) {
          return [64.91, 68.59, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 35.1) {
          return [16.7, 35.1, 'VL'];
        } else if (tw <= 40.2) {
          return [35.1, 40.2, 'L'];
        } else if (tw <= 46.91) {
          return [40.2, 46.91, 'NL'];
        } else if (tw <= 53.62) {
          return [46.91, 53.62, 'N'];
        } else if (tw <= 60.34) {
          return [53.62, 60.34, 'NH'];
        } else if (tw <= 63.69) {
          return [60.34, 63.69, 'H'];
        } else if (tw <= 70.41) {
          return [63.69, 70.41, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.57) {
          return [11.5, 36.57, 'VL'];
        } else if (tw <= 40.14) {
          return [36.57, 40.14, 'L'];
        } else if (tw <= 47.29) {
          return [40.14, 47.29, 'NL'];
        } else if (tw <= 54.43) {
          return [47.29, 54.43, 'N'];
        } else if (tw <= 58.0) {
          return [54.43, 58.0, 'NH'];
        } else if (tw <= 65.14) {
          return [58.0, 65.14, 'H'];
        } else if (tw <= 68.73) {
          return [65.14, 68.73, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 35.95) {
          return [15.3, 35.95, 'VL'];
        } else if (tw <= 42.82) {
          return [35.95, 42.82, 'L'];
        } else if (tw <= 46.25) {
          return [42.82, 46.25, 'NL'];
        } else if (tw <= 53.13) {
          return [46.25, 53.13, 'N'];
        } else if (tw <= 60.0) {
          return [53.13, 60.0, 'NH'];
        } else if (tw <= 63.44) {
          return [60.0, 63.44, 'H'];
        } else if (tw <= 70.35) {
          return [63.44, 70.35, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 34.91) {
          return [14.47, 34.91, 'VL'];
        } else if (tw <= 41.74) {
          return [34.91, 41.74, 'L'];
        } else if (tw <= 48.57) {
          return [41.74, 48.57, 'NL'];
        } else if (tw <= 51.98) {
          return [48.57, 51.98, 'N'];
        } else if (tw <= 58.81) {
          return [51.98, 58.81, 'NH'];
        } else if (tw <= 65.63) {
          return [58.81, 65.63, 'H'];
        } else if (tw <= 69.0) {
          return [65.63, 69.0, 'VH'];
        }
      }
    }
  }
}

export function getGradeLimitPBT(
  tw: number,
  month: number,
  gender: string,
  part: number,
): [number, number, string] {
  console.log('getGradeLimitPBT', tw, month, gender, part);
  if (part === 1) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 35.21) {
          return [-4.07, 35.21, 'VL'];
        } else if (tw <= 45.93) {
          return [35.21, 45.93, 'L'];
        } else if (tw <= 56.64) {
          return [45.93, 56.64, 'N'];
        } else if (tw <= 60.21) {
          return [56.64, 60.21, 'H'];
        } else if (tw <= 63.2) {
          return [60.21, 63.21, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.59) {
          return [-1.34, 36.59, 'VL'];
        } else if (tw <= 45.2) {
          return [36.59, 45.2, 'L'];
        } else if (tw <= 57.28) {
          return [45.2, 57.28, 'N'];
        } else if (tw <= 60.72) {
          return [57.28, 60.72, 'H'];
        } else if (tw <= 63.72) {
          return [60.72, 63.72, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 37.08) {
          return [-1.65, 37.08, 'VL'];
        } else if (tw <= 44.12) {
          return [37.08, 44.12, 'L'];
        } else if (tw <= 58.2) {
          return [44.12, 58.2, 'N'];
        } else if (tw <= 61.73) {
          return [58.2, 61.73, 'H'];
        } else if (tw <= 64.73) {
          return [61.73, 64.73, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.45) {
          return [-2.55, 36.45, 'VL'];
        } else if (tw <= 43.55) {
          return [36.45, 43.55, 'L'];
        } else if (tw <= 57.73) {
          return [43.55, 57.73, 'N'];
        } else if (tw <= 61.28) {
          return [57.73, 61.28, 'H'];
        } else if (tw <= 64.28) {
          return [61.28, 64.28, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 37.58) {
          return [3.45, 37.58, 'VL'];
        } else if (tw <= 44.4) {
          return [37.58, 44.4, 'L'];
        } else if (tw <= 54.64) {
          return [44.4, 54.64, 'N'];
        } else if (tw <= 64.88) {
          return [54.64, 64.88, 'H'];
        } else if (tw <= 67.88) {
          return [64.88, 67.88, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 39.09) {
          return [-0.91, 39.09, 'VL'];
        } else if (tw <= 42.73) {
          return [39.09, 42.73, 'L'];
        } else if (tw <= 57.27) {
          return [42.73, 57.27, 'N'];
        } else if (tw <= 64.55) {
          return [57.27, 64.55, 'H'];
        } else if (tw <= 67.55) {
          return [64.55, 67.55, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 38.92) {
          return [-0.5, 38.92, 'VL'];
        } else if (tw <= 42.51) {
          return [38.92, 42.51, 'L'];
        } else if (tw <= 56.85) {
          return [42.51, 56.85, 'N'];
        } else if (tw <= 64.01) {
          return [56.85, 64.01, 'H'];
        } else if (tw <= 67.01) {
          return [64.01, 67.01, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 38.43) {
          return [-2.77, 38.43, 'VL'];
        } else if (tw <= 42.17) {
          return [38.43, 42.17, 'L'];
        } else if (tw <= 57.15) {
          return [42.17, 57.15, 'N'];
        } else if (tw <= 64.64) {
          return [57.15, 64.64, 'H'];
        } else if (tw <= 67.64) {
          return [64.64, 67.64, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 39.78) {
          return [-0.36, 39.78, 'VL'];
        } else if (tw <= 43.43) {
          return [39.78, 43.43, 'L'];
        } else if (tw <= 58.03) {
          return [43.43, 58.03, 'N'];
        } else if (tw <= 65.33) {
          return [58.03, 65.33, 'H'];
        } else if (tw <= 68.33) {
          return [65.33, 68.33, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 40.25) {
          return [0.82, 40.25, 'VL'];
        } else if (tw <= 43.84) {
          return [40.25, 43.84, 'L'];
        } else if (tw <= 55.31) {
          return [43.84, 55.31, 'N'];
        } else if (tw <= 65.34) {
          return [55.31, 65.34, 'H'];
        } else if (tw <= 68.34) {
          return [65.34, 68.34, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 39.96) {
          return [-2.51, 39.96, 'VL'];
        } else if (tw <= 43.82) {
          return [39.96, 43.82, 'L'];
        } else if (tw <= 55.41) {
          return [43.82, 55.41, 'N'];
        } else if (tw <= 63.13) {
          return [55.41, 63.13, 'H'];
        } else if (tw <= 66.99) {
          return [63.13, 66.99, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 39.21) {
          return [-4.09, 39.21, 'VL'];
        } else if (tw <= 43.15) {
          return [39.21, 43.15, 'L'];
        } else if (tw <= 57.32) {
          return [43.15, 57.32, 'N'];
        } else if (tw <= 62.83) {
          return [57.32, 62.83, 'H'];
        } else if (tw <= 66.77) {
          return [62.83, 66.77, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 40.58) {
          return [-2.05, 40.58, 'VL'];
        } else if (tw <= 44.46) {
          return [40.58, 44.46, 'L'];
        } else if (tw <= 56.09) {
          return [44.46, 56.09, 'N'];
        } else if (tw <= 63.84) {
          return [56.09, 63.84, 'H'];
        } else if (tw <= 67.71) {
          return [63.84, 67.71, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 38.34) {
          return [8.34, 38.34, 'VL'];
        } else if (tw <= 45.84) {
          return [38.34, 45.84, 'L'];
        } else if (tw <= 55.22) {
          return [45.84, 55.22, 'N'];
        } else if (tw <= 64.59) {
          return [55.22, 64.59, 'H'];
        } else if (tw <= 67.59) {
          return [64.59, 67.59, 'VH'];
        }
      }
    }
  }
  if (part === 2) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 39.25) {
          return [35.43, 39.25, 'VL'];
        } else if (tw <= 43.18) {
          return [39.25, 43.18, 'L'];
        } else if (tw <= 54.94) {
          return [43.18, 54.94, 'N'];
        } else if (tw <= 62.78) {
          return [54.94, 62.78, 'H'];
        } else if (tw <= 94.16) {
          return [62.78, 94.16, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 38.47) {
          return [34.21, 38.47, 'VL'];
        } else if (tw <= 42.72) {
          return [38.47, 42.72, 'L'];
        } else if (tw <= 55.49) {
          return [42.72, 55.49, 'N'];
        } else if (tw <= 64.0) {
          return [55.49, 64.0, 'H'];
        } else if (tw <= 98.04) {
          return [64.0, 98.04, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 36.35) {
          return [32.38, 36.35, 'VL'];
        } else if (tw <= 44.29) {
          return [36.35, 44.29, 'L'];
        } else if (tw <= 56.19) {
          return [44.29, 56.19, 'N'];
        } else if (tw <= 64.13) {
          return [56.19, 64.13, 'H'];
        } else if (tw <= 91.9) {
          return [64.13, 91.9, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 37.42) {
          return [33.58, 37.42, 'VL'];
        } else if (tw <= 45.12) {
          return [37.42, 45.12, 'L'];
        } else if (tw <= 52.81) {
          return [45.12, 52.81, 'N'];
        } else if (tw <= 64.35) {
          return [52.81, 64.35, 'H'];
        } else if (tw <= 91.27) {
          return [64.35, 91.27, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 36.13) {
          return [29.47, 36.13, 'VL'];
        } else if (tw <= 42.8) {
          return [36.13, 42.8, 'L'];
        } else if (tw <= 56.13) {
          return [42.8, 56.13, 'N'];
        } else if (tw <= 62.8) {
          return [56.13, 62.8, 'H'];
        } else if (tw <= 79.47) {
          return [62.8, 79.47, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.86) {
          return [29.79, 36.86, 'VL'];
        } else if (tw <= 43.92) {
          return [36.86, 43.92, 'L'];
        } else if (tw <= 54.52) {
          return [43.92, 54.52, 'N'];
        } else if (tw <= 65.12) {
          return [54.52, 65.12, 'H'];
        } else if (tw <= 82.79) {
          return [65.12, 82.79, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 36.5) {
          return [29.2, 36.5, 'VL'];
        } else if (tw <= 43.8) {
          return [36.5, 43.8, 'L'];
        } else if (tw <= 54.74) {
          return [43.8, 54.74, 'N'];
        } else if (tw <= 62.04) {
          return [54.74, 62.04, 'H'];
        } else if (tw <= 83.94) {
          return [62.04, 83.94, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.38) {
          return [28.69, 36.38, 'VL'];
        } else if (tw <= 44.08) {
          return [36.38, 44.08, 'L'];
        } else if (tw <= 55.62) {
          return [44.08, 55.62, 'N'];
        } else if (tw <= 63.31) {
          return [55.62, 63.31, 'H'];
        } else if (tw <= 86.38) {
          return [63.31, 86.38, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 36.11) {
          return [29.09, 36.11, 'VL'];
        } else if (tw <= 43.12) {
          return [36.11, 43.12, 'L'];
        } else if (tw <= 57.16) {
          return [43.12, 57.16, 'N'];
        } else if (tw <= 64.18) {
          return [57.16, 64.18, 'H'];
        } else if (tw <= 81.72) {
          return [64.18, 81.72, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.26) {
          return [28.85, 36.26, 'VL'];
        } else if (tw <= 43.67) {
          return [36.26, 43.67, 'L'];
        } else if (tw <= 54.78) {
          return [43.67, 54.78, 'N'];
        } else if (tw <= 62.19) {
          return [54.78, 62.19, 'H'];
        } else if (tw <= 84.41) {
          return [62.19, 84.41, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 35.3) {
          return [28.33, 35.3, 'VL'];
        } else if (tw <= 42.26) {
          return [35.3, 42.26, 'L'];
        } else if (tw <= 56.2) {
          return [42.26, 56.2, 'N'];
        } else if (tw <= 63.17) {
          return [56.2, 63.17, 'H'];
        } else if (tw <= 80.59) {
          return [63.17, 80.59, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.41) {
          return [28.24, 35.41, 'VL'];
        } else if (tw <= 46.16) {
          return [35.41, 46.16, 'L'];
        } else if (tw <= 56.92) {
          return [46.16, 56.92, 'N'];
        } else if (tw <= 60.5) {
          return [56.92, 60.5, 'H'];
        } else if (tw <= 82.01) {
          return [60.5, 82.01, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 36.22) {
          return [24.41, 36.22, 'VL'];
        } else if (tw <= 44.09) {
          return [36.22, 44.09, 'L'];
        } else if (tw <= 55.91) {
          return [44.09, 55.91, 'N'];
        } else if (tw <= 63.78) {
          return [55.91, 63.78, 'H'];
        } else if (tw <= 83.46) {
          return [63.78, 83.46, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 37.26) {
          return [25.98, 37.26, 'VL'];
        } else if (tw <= 44.77) {
          return [37.26, 44.77, 'L'];
        } else if (tw <= 56.05) {
          return [44.77, 56.05, 'N'];
        } else if (tw <= 63.57) {
          return [56.05, 63.57, 'H'];
        } else if (tw <= 82.37) {
          return [63.57, 82.37, 'VH'];
        }
      }
    }
  }
  if (part === 3) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 40.82) {
          return [37.82, 40.82, 'VL'];
        } else if (tw <= 43.82) {
          return [40.82, 43.82, 'L'];
        } else if (tw <= 53.48) {
          return [43.82, 53.48, 'N'];
        } else if (tw <= 66.14) {
          return [53.48, 66.14, 'H'];
        } else if (tw <= 116.77) {
          return [66.14, 116.77, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 40.18) {
          return [37.18, 40.18, 'VL'];
        } else if (tw <= 46.06) {
          return [40.18, 46.06, 'L'];
        } else if (tw <= 51.94) {
          return [46.06, 51.94, 'N'];
        } else if (tw <= 63.71) {
          return [51.94, 63.71, 'H'];
        } else if (tw <= 110.76) {
          return [63.71, 110.76, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 37.82) {
          return [34.82, 37.82, 'VL'];
        } else if (tw <= 43.88) {
          return [37.82, 43.88, 'L'];
        } else if (tw <= 56.0) {
          return [43.88, 56.0, 'N'];
        } else if (tw <= 62.06) {
          return [56.0, 62.06, 'H'];
        } else if (tw <= 110.55) {
          return [62.06, 110.55, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 39.33) {
          return [36.33, 39.33, 'VL'];
        } else if (tw <= 44.94) {
          return [39.33, 44.94, 'L'];
        } else if (tw <= 50.56) {
          return [44.94, 50.56, 'N'];
        } else if (tw <= 66.86) {
          return [50.56, 66.86, 'H'];
        } else if (tw <= 106.74) {
          return [66.86, 106.74, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 39.18) {
          return [34.87, 39.18, 'VL'];
        } else if (tw <= 43.49) {
          return [39.18, 43.49, 'L'];
        } else if (tw <= 56.42) {
          return [43.49, 56.42, 'N'];
        } else if (tw <= 65.04) {
          return [56.42, 65.04, 'H'];
        } else if (tw <= 86.59) {
          return [65.04, 86.59, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 39.76) {
          return [34.98, 39.76, 'VL'];
        } else if (tw <= 44.55) {
          return [39.76, 44.55, 'L'];
        } else if (tw <= 54.11) {
          return [44.55, 54.11, 'N'];
        } else if (tw <= 63.68) {
          return [54.11, 63.68, 'H'];
        } else if (tw <= 92.39) {
          return [63.68, 92.39, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 38.99) {
          return [33.94, 38.99, 'VL'];
        } else if (tw <= 44.04) {
          return [38.99, 44.04, 'L'];
        } else if (tw <= 54.14) {
          return [44.04, 54.14, 'N'];
        } else if (tw <= 64.24) {
          return [54.14, 64.24, 'H'];
        } else if (tw <= 94.55) {
          return [64.24, 94.55, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 39.02) {
          return [33.55, 39.02, 'VL'];
        } else if (tw <= 44.48) {
          return [39.02, 44.48, 'L'];
        } else if (tw <= 55.41) {
          return [44.48, 55.41, 'N'];
        } else if (tw <= 60.87) {
          return [55.41, 60.87, 'H'];
        } else if (tw <= 99.13) {
          return [60.87, 99.13, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 36.95) {
          return [31.88, 36.95, 'VL'];
        } else if (tw <= 42.03) {
          return [36.95, 42.03, 'L'];
        } else if (tw <= 57.26) {
          return [42.03, 57.26, 'N'];
        } else if (tw <= 62.34) {
          return [57.26, 62.34, 'H'];
        } else if (tw <= 92.79) {
          return [62.34, 92.79, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 37.93) {
          return [32.61, 37.93, 'VL'];
        } else if (tw <= 43.24) {
          return [37.93, 43.24, 'L'];
        } else if (tw <= 53.88) {
          return [43.24, 53.88, 'N'];
        } else if (tw <= 64.52) {
          return [53.88, 64.52, 'H'];
        } else if (tw <= 96.44) {
          return [64.52, 96.44, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 35.2) {
          return [30.2, 35.2, 'VL'];
        } else if (tw <= 45.2) {
          return [35.2, 45.2, 'L'];
        } else if (tw <= 55.2) {
          return [45.2, 55.2, 'N'];
        } else if (tw <= 60.2) {
          return [55.2, 60.2, 'H'];
        } else if (tw <= 90.2) {
          return [60.2, 90.2, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.57) {
          return [30.41, 35.57, 'VL'];
        } else if (tw <= 45.88) {
          return [35.57, 45.88, 'L'];
        } else if (tw <= 56.19) {
          return [45.88, 56.19, 'N'];
        } else if (tw <= 61.34) {
          return [56.19, 61.34, 'H'];
        } else if (tw <= 92.27) {
          return [61.34, 92.27, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 38.09) {
          return [27.45, 38.09, 'VL'];
        } else if (tw <= 43.4) {
          return [38.09, 43.4, 'L'];
        } else if (tw <= 54.04) {
          return [43.4, 54.04, 'N'];
        } else if (tw <= 64.68) {
          return [54.04, 64.68, 'H'];
        } else if (tw <= 91.28) {
          return [64.68, 91.28, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.07) {
          return [30.33, 35.07, 'VL'];
        } else if (tw <= 44.55) {
          return [35.07, 44.55, 'L'];
        } else if (tw <= 54.03) {
          return [44.55, 54.03, 'N'];
        } else if (tw <= 58.77) {
          return [54.03, 58.77, 'H'];
        } else if (tw <= 87.2) {
          return [58.77, 87.2, 'VH'];
        }
      }
    }
  }
  if (part === 4) {
    if (month >= 24 && month <= 35) {
      if (gender === 'male') {
        if (tw <= 39.11) {
          return [-11.85, 39.11, 'VL'];
        } else if (tw <= 45.48) {
          return [39.11, 45.48, 'L'];
        } else if (tw <= 58.22) {
          return [45.48, 58.22, 'N'];
        } else if (tw <= 64.59) {
          return [58.22, 64.59, 'H'];
        } else if (tw <= 83.69) {
          return [64.59, 83.69, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 39.94) {
          return [-9.75, 39.94, 'VL'];
        } else if (tw <= 46.15) {
          return [39.94, 46.15, 'L'];
        } else if (tw <= 58.57) {
          return [46.15, 58.57, 'N'];
        } else if (tw <= 64.78) {
          return [58.57, 64.78, 'H'];
        } else if (tw <= 84.42) {
          return [64.78, 84.42, 'VH'];
        }
      }
    }
    if (month >= 36 && month <= 47) {
      if (gender === 'male') {
        if (tw <= 36.95) {
          return [-3.28, 36.95, 'VL'];
        } else if (tw <= 48.45) {
          return [36.95, 48.45, 'L'];
        } else if (tw <= 54.2) {
          return [48.45, 54.2, 'N'];
        } else if (tw <= 59.94) {
          return [54.2, 59.94, 'H'];
        } else if (tw <= 82.93) {
          return [59.94, 82.93, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.69) {
          return [-2.64, 36.69, 'VL'];
        } else if (tw <= 47.92) {
          return [36.69, 47.92, 'L'];
        } else if (tw <= 53.54) {
          return [47.92, 53.54, 'N'];
        } else if (tw <= 64.78) {
          return [53.54, 64.78, 'H'];
        } else if (tw <= 81.63) {
          return [64.78, 81.63, 'VH'];
        }
      }
    }
    if (month >= 48 && month <= 59) {
      if (gender === 'male') {
        if (tw <= 38.49) {
          return [7.24, 38.49, 'VL'];
        } else if (tw <= 43.7) {
          return [38.49, 43.7, 'L'];
        } else if (tw <= 54.11) {
          return [43.7, 54.11, 'N'];
        } else if (tw <= 64.53) {
          return [54.11, 64.53, 'H'];
        } else if (tw <= 85.36) {
          return [64.53, 85.36, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 37.53) {
          return [6.6, 37.53, 'VL'];
        } else if (tw <= 42.68) {
          return [37.53, 42.68, 'L'];
        } else if (tw <= 52.99) {
          return [42.68, 52.99, 'N'];
        } else if (tw <= 63.3) {
          return [52.99, 63.3, 'H'];
        } else if (tw <= 83.92) {
          return [63.3, 83.92, 'VH'];
        }
      }
    }
    if (month >= 60 && month <= 71) {
      if (gender === 'male') {
        if (tw <= 35.05) {
          return [3.47, 35.05, 'VL'];
        } else if (tw <= 45.58) {
          return [35.05, 45.58, 'L'];
        } else if (tw <= 56.11) {
          return [45.58, 56.11, 'N'];
        } else if (tw <= 61.37) {
          return [56.11, 61.37, 'H'];
        } else if (tw <= 82.42) {
          return [61.37, 82.42, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.22) {
          return [1.89, 35.22, 'VL'];
        } else if (tw <= 46.33) {
          return [35.22, 46.33, 'L'];
        } else if (tw <= 57.44) {
          return [46.33, 57.44, 'N'];
        } else if (tw <= 63.0) {
          return [57.44, 63.0, 'H'];
        } else if (tw <= 85.22) {
          return [63.0, 85.22, 'VH'];
        }
      }
    }
    if (month >= 72 && month <= 83) {
      if (gender === 'male') {
        if (tw <= 35.45) {
          return [3.7, 35.45, 'VL'];
        } else if (tw <= 46.03) {
          return [35.45, 46.03, 'L'];
        } else if (tw <= 56.61) {
          return [46.03, 56.61, 'N'];
        } else if (tw <= 61.9) {
          return [56.61, 61.9, 'H'];
        } else if (tw <= 83.07) {
          return [61.9, 83.07, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 35.3) {
          return [2.86, 35.3, 'VL'];
        } else if (tw <= 46.11) {
          return [35.3, 46.11, 'L'];
        } else if (tw <= 56.92) {
          return [46.11, 56.92, 'N'];
        } else if (tw <= 62.32) {
          return [56.92, 62.32, 'H'];
        } else if (tw <= 83.95) {
          return [62.32, 83.95, 'VH'];
        }
      }
    }
    if (month >= 84 && month <= 95) {
      if (gender === 'male') {
        if (tw <= 39.26) {
          return [9.7, 39.26, 'VL'];
        } else if (tw <= 44.19) {
          return [39.26, 44.19, 'L'];
        } else if (tw <= 54.04) {
          return [44.19, 54.04, 'N'];
        } else if (tw <= 63.89) {
          return [54.04, 63.89, 'H'];
        } else if (tw <= 83.6) {
          return [63.89, 83.6, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 36.12) {
          return [3.33, 36.12, 'VL'];
        } else if (tw <= 43.76) {
          return [36.12, 43.76, 'L'];
        } else if (tw <= 52.51) {
          return [43.76, 52.51, 'N'];
        } else if (tw <= 63.44) {
          return [52.51, 63.44, 'H'];
        } else if (tw <= 85.3) {
          return [63.44, 85.3, 'VH'];
        }
      }
    }
    if (month >= 96 && month <= 120) {
      if (gender === 'male') {
        if (tw <= 37.28) {
          return [4.67, 37.28, 'VL'];
        } else if (tw <= 42.72) {
          return [37.28, 42.72, 'L'];
        } else if (tw <= 53.59) {
          return [42.72, 53.59, 'N'];
        } else if (tw <= 60.65) {
          return [53.59, 60.65, 'H'];
        } else if (tw <= 86.2) {
          return [60.65, 86.2, 'VH'];
        }
      } else if (gender === 'female') {
        if (tw <= 37.53) {
          return [5.27, 37.53, 'VL'];
        } else if (tw <= 42.9) {
          return [37.53, 42.9, 'L'];
        } else if (tw <= 53.66) {
          return [42.9, 53.66, 'N'];
        } else if (tw <= 64.41) {
          return [53.66, 64.41, 'H'];
        } else if (tw <= 85.91) {
          return [64.41, 85.91, 'VH'];
        }
      }
    }
  }
}
