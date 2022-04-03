import { menu } from './menu';

export const PostOptions = {
  parent: menu.post,
  properties: {
    _id: {
      isVisible: { list: false, show: true },
    },
    title: { isTitle: true, position: 1 },
    content: { type: 'richtext', position: 2 },
    startDate: {
      position: 3,
      isVisible: { list: false, show: true },
    },
    endDate: {
      position: 4,
      isVisible: { list: false, show: true },
    },
    createdAt: {
      isVisible: { show: false },
    },
    updatedAt: {
      isVisible: { show: false },
    },
  },
};
