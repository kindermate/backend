import { menu } from './menu';

export const MissionOptions = {
  parent: menu.mission,
  properties: {
    _id: { position: 1 },
    owner: { position: 2 },
    result: { isVisible: false },
    ratings: { position: 3 },
    week: { position: 4 },
    startDate: { position: 5 },
    isComplete: { position: 6 },
    isFinished: { position: 7 },
    createdAt: { position: 8 },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
