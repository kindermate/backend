import { menu } from './menu';

const testCode = [
  { value: 'CTT', label: 'CTT' },
  { value: 'MAT', label: 'MAT' },
  { value: 'PBT', label: 'PBT' },
];

export const GuideOptions = {
  parent: menu.result,
  properties: {
    _id: { position: 1 },
    code: { position: 2, availableValues: [...testCode] },
    extraGrade: { position: 3 },
    content: { position: 4, type: 'richtext' },
    createdAt: { position: 5, isVisible: { show: false } },
    updatedAt: { isVisible: false },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
