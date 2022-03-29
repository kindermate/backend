import AdminJS from 'adminjs';
import { menu } from './menu';

export const AnswerOptions = {
  parent: menu.test,
  properties: {
    answers: {
      components: {
        show: AdminJS.bundle('../components/AnswersValues'),
      },
      isVisible: {
        list: false,
        show: true,
      },
    },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
