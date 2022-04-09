import { menu } from './menu';

export const ResultOptions = {
  parent: menu.result,
  properties: {
    _id: { position: 1 },
    owner: { position: 2, isId: true },
    results: { position: 3 },
    createdAt: { position: 4 },
    updatedAt: { position: 5 },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
