import { menu } from './menu';
import { simpleTestCode } from './simpleTestUtils';

export const SimpleTestResultOptions = {
  parent: menu.simpleTest,
  properties: {
    _id: { position: 1 },
    code: { position: 2, availableValues: [...simpleTestCode] },
    owner: { position: 3 },
    grade: { position: 4 },
    createdAt: { position: 5 },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
