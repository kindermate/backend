import { menu } from './menu';

export const MessageOptions = {
  parent: menu.mission,
  properties: {
    message: { position: 1, type: 'textarea' },
    score: { position: 2 },
    min: { position: 3 },
    max: { position: 4 },
    isClosing: { position: 5 },
  },
};
