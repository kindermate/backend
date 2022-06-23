import { menu } from './menu';

export const PageOptions = {
  parent: menu.post,
  properties: {
    _id: { position: 1 },
    title: { isTitle: true, position: 2 },
    content: { type: 'richtext', position: 3 },
    createdAt: {
      isVisible: { show: false },
    },
    updatedAt: {
      isVisible: { show: false },
    },
  },
};
