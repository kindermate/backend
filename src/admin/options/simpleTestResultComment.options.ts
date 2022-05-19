import { menu } from './menu';
import { simpleTestCode, simpleTestGrade } from './simpleTestUtils';

export const SimpleTestResultCommentOptions = {
  parent: menu.simpleTest,
  properties: {
    _id: { position: 1 },
    code: { position: 2, availableValues: [...simpleTestCode] },
    grade: { position: 3, availableValues: [...simpleTestGrade] },
    content: { position: 4, type: 'richtext' },
  },
  sort: {
    sortBy: 'code',
    direction: 'asc',
  },
};
