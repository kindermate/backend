import { menu } from './menu';

const testCode = [
  { value: 'CTT', label: 'CTT' },
  { value: 'MAT', label: 'MAT' },
  { value: 'PBT', label: 'PBT' },
];

export const QuestionOptions = {
  parent: menu.test,
  properties: {
    _id: { isVisible: false },
    code: {
      position: 1,
      availableValues: [...testCode],
    },
    part: { position: 2 },
    order: { position: 3 },
    question: { position: 4 },
    isInverse: { position: 5 },
  },
  sort: {
    sortBy: 'order',
    direction: 'desc',
  },
};
