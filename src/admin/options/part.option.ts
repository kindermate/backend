import { menu } from './menu';

const testCode = [
  { value: 'CTT', label: 'CTT' },
  { value: 'MAT', label: 'MAT' },
  { value: 'PBT', label: 'PBT' },
];

export const PartOptions = {
  parent: menu.test,
  properties: {
    _id: { isVisible: false },
    code: {
      position: 1,
      availableValues: [...testCode],
    },
    areaCode: { position: 2 },
    title: { position: 3 },
    subTitle: { position: 4 },
    description: { position: 5 },
  },
};
