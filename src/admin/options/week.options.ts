import { menu } from './menu';

const testCode = [
  { value: 'CTT', label: 'CTT' },
  { value: 'MAT', label: 'MAT' },
  { value: 'PBT', label: 'PBT' },
];

export const WeekOptions = {
  parent: menu.mission,
  properties: {
    _id: { isVisible: false },
    code: {
      position: 1,
      availableValues: [...testCode],
    },
    name: { position: 2 },
    week: { position: 3 },
    part: { position: 4 },
  },
};
