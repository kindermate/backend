import { menu } from './menu';

const testCode = [
  { value: 'CTT', label: 'CTT' },
  { value: 'MAT', label: 'MAT' },
  { value: 'PBT', label: 'PBT' },
];

export const TestOptions = {
  parent: menu.test,
  properties: {
    _id: { isVisible: false },
    code: {
      position: 1,
      availableValues: [...testCode],
    },
    title: { position: 2 },
    subTitle: { position: 3 },
    description: { type: 'textarea', position: 4 },
    notice: { type: 'textarea', position: 5 },
  },
};
