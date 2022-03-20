import { menu } from './menu';

export const AnswerOptions = {
  parent: menu.test,
  properties: {
    answers: { isVisible: false },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
