import { menu } from './menu';

export const SimpleTestAnswerOptions = {
  parent: menu.simpleTest,
  properties: {
    owner: { position: 1 },
    answers: { position: 2 },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
