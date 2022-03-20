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
    recommander: { position: 7 },
    createdAt: { position: 8 },
    updatedAt: { position: 9 },
  },
};
