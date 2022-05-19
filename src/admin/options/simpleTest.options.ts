import { menu } from './menu';
import { simpleTestCode } from './simpleTestUtils';

export const SimpleTestOptions = {
  parent: menu.simpleTest,
  properties: {
    _id: { isVisible: false },
    code: {
      position: 1,
      availableValues: [...simpleTestCode],
    },
    title: { position: 2 },
    subTitle: { position: 3 },
    description: {
      type: 'textarea',
      position: 4,
      isVisible: { list: false, show: true },
    },
    activationStartDate: { position: 5 },
    activationLastDate: { position: 6 },
  },
};
