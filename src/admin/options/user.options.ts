import { menu } from './menu';
import AdminJS from 'adminjs';

export const UserOptions = {
  parent: menu.user,
  actions: {
    new: { isVisible: false },
    download: {
      icon: 'View',
      actionType: 'resource',
      component: AdminJS.bundle('../components/DownloadUsers.jsx'),
    },
  },
  properties: {
    // _id: {
    //   isVisible: false,
    // },
    username: { position: 1 },
    nickname: { position: 2 },
    email: { position: 3 },
    password: { isVisible: false },
    birth: { position: 4 },
    gender: { position: 5 },
    address1: { position: 6 },
    address2: { position: 7 },
    type: { position: 8 },
    findOut: { position: 9 },
    createdAt: { position: 10 },
    updatedAt: { position: 11 },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
