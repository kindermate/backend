import { menu } from './menu';

export const UserOptions = {
  parent: menu.user,
  actions: {
    new: { isVisible: false },
  },
  properties: {
    _id: {
      isVisible: false,
    },
    username: { position: 1 },
    nickname: { position: 2 },
    email: { position: 3 },
    password: { isVisible: false },
    birth: { position: 4 },
    gender: { position: 5 },
    country: { position: 6 },
    address1: { position: 7 },
    address2: { position: 8 },
    recommander: { position: 9 },
    createdAt: { position: 10 },
    updatedAt: { position: 11 },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
