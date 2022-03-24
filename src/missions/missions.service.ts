// import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mission } from './schema/mission.schema';
import { User } from '@/users/user.schema';
import { Member } from '@/members/member.schema';
import { Week } from './schema/week.schema';
import { Rating } from '../ratings/schema/rating.schema';

@Injectable()
export class MissionsService {
  constructor(
    @InjectModel(Mission.name)
    private readonly missionModel: Model<Mission>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Member.name)
    private readonly memberModel: Model<Member>,
    @InjectModel(Week.name)
    private readonly weekModel: Model<Week>,
    @InjectModel(Rating.name)
    private readonly ratingModel: Model<Rating>,
  ) {}

  async getMembersWithMissions(id: string) {
    const user = await this.userModel.findById(id);
    const members = await this.memberModel
      .find(
        { parent: user._id },
        {
          avatar: 1,
          birth: 1,
          gender: 1,
          name: 1,
          results: 1,
        },
      )
      .populate({
        path: 'missions',
        options: { sort: { createdAt: -1 } },
        populate: { path: 'result', select: 'results' },
      });
    return members;
  }

  async getMissionSet(query: object) {
    const week = query['week'];
    const grade = query['grade'];
    const missionSet = await this.weekModel
      .findOne({ week: week })
      .populate('tasksHigh', 'title description tags term infant student')
      .populate('tasksNormal', 'title description tags term infant student')
      .populate('tasksLow', 'title description tags term infant student');
    // 미션 정보 생성
    console.log(missionSet);
    const mission = {
      code: missionSet.code,
      name: missionSet.name,
      week: missionSet.week,
      part: missionSet.part,
      // createdAt: missionSet.createdAt,
    };
    if (grade === 'VH' || grade === 'H') {
      mission['tasks'] = missionSet.tasksHigh;
    } else if (grade === 'NH' || grade === 'N' || grade === 'NL') {
      mission['tasks'] = missionSet.tasksNormal;
    } else if (grade === 'L' || grade === 'VL') {
      mission['tasks'] = missionSet.tasksLow;
    }
    return mission;
  }
}
