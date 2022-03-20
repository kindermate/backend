import { menu } from './menu';

export const PostOptions = {
  parent: menu.post,
  properties: {
    title: { isTitle: true, position: 1 },
    content: { type: 'richtext', position: 2 },
    startDate: {
      position: 3,
    },
    endDate: {
      position: 4,
    },
    createdAt: {
      isVisible: { show: false },
    },
    updatedAt: {
      isVisible: { show: false },
    },
  },
};
