import { menu } from './menu';

export const ResultOptions = {
  parent: menu.result,
  properties: {
    // answers: { isVisible: false },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
