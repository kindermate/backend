import { Mission } from '@/missions/schema/mission.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rating } from './schema/rating.schema';

@Injectable()
export class RatingsService {
  constructor(
    @InjectModel(Rating.name)
    private readonly ratingModel: Model<Rating>,
    @InjectModel(Mission.name)
    private readonly missionModel: Model<Mission>,
  ) {}

  async getRating(query: object) {
    const mission = query['mission'];
    const week = query['week'];
    // const code = query['code'];

    const existMission = await this.missionModel.findById(mission);

    const rating = await this.ratingModel.findOne({
      mission: existMission._id,
      week,
      // code,
    });
    return rating;
  }

  async saveRating(value: object) {
    const id = value['mission'];
    const week = value['week'];
    // const code = value['code'];
    const rating = value['rating'];

    // 해당 mission 찾기
    const mission = await this.missionModel.findById(id);

    // Rating 찾기
    const existRating = await this.ratingModel.findOne({
      mission: mission._id,
      // code,
      week,
    });
    // 기존 Rating이 없을때
    if (!existRating) {
      const newRating = await this.ratingModel.create({
        mission: mission._id,
        // code,
        week,
        rating,
      });

      return newRating;
    } else {
      existRating.rating = rating;
      await existRating.save();
      return existRating;
    }
  }
}
