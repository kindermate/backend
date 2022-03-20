import { menu } from './menu';

const testCode = [
  { value: 'CTT', label: 'CTT' },
  { value: 'MAT', label: 'MAT' },
  { value: 'PBT', label: 'PBT' },
];

export const ExtraOptions = {
  parent: menu.result,
  properties: {
    _id: { isVisible: false },
    code: {
      position: 1,
      availableValues: [...testCode],
    },
    status: { position: 2 },
    title: { position: 3 },
    content: { position: 4 },
  },
};
