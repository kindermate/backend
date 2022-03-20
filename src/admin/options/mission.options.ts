import { menu } from './menu';

export const MissionOptions = {
  parent: menu.mission,
  properties: {
    _id: { position: 1 },
    owner: { position: 2 },
    result: { position: 3 },
    ratings: { position: 4 },
    week: { position: 5 },
    isComplete: { position: 6 },
    isFinished: { position: 7 },
  },
  sort: {
    sortBy: 'createdAt',
    direction: 'desc',
  },
};
