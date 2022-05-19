import { menu } from './menu';
import { simpleTestCode } from './simpleTestUtils';

export const SimpleTestQuestionOptions = {
  parent: menu.simpleTest,
  properties: {
    _id: { isVisible: false },
    code: {
      position: 1,
      availableValues: [...simpleTestCode],
    },
    order: { position: 2 },
    question: { position: 3 },
    isInverse: { position: 4 },
  },
  sort: {
    sortBy: 'order',
    direction: 'desc',
  },
};
