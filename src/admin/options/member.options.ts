import { menu } from './menu';

export const MemberOptions = {
  parent: menu.user,
  actions: {
    new: { isVisible: false },
  },
  properties: {
    _id: { position: 1 },
    parent: { position: 2 },
    name: { position: 3 },
    birth: { position: 4 },
    gender: { position: 5 },
    createdAt: { position: 6 },
    updatedAt: { isVisible: false },
    avatar: { isVisible: false },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
