// import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Mission } from './schema/mission.schema';
import { User } from '@/users/user.schema';
import { Member } from '@/members/member.schema';
import { Week } from './schema/week.schema';
import { Rating } from '../ratings/schema/rating.schema';
import * as moment from 'moment';
import { Message } from './schema/message.schema';

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
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
  ) {}

  // 임시: start date 추가
  async addStartDate() {
    const missions = await this.missionModel.find({});
    missions.forEach(async (mission) => {
      console.log(mission['createdAt']);
      mission.startDate = mission['createdAt'];
      await mission.save();
    });
  }

  async getMission(id: string) {
    const mission = await this.missionModel.findById(id);
    return mission;
  }

  async finishMission(id: string) {
    const mission = await this.missionModel.findById(id);
    const member = await this.memberModel.findById(mission.owner);
    if (mission) {
      mission.isFinished = true;
      mission.save();
      member.hasActiveMission = false;
      member.save();
      return 'Success';
    }
  }

  async getMessageWithScore(score: number) {
    const message = await this.messageModel.findOne({ score: score });
    return message;
  }

  async getMessageForClosing(score: number) {
    const messages = await this.messageModel.find({ isClosing: true });
    let message = {};
    messages.forEach((item) => {
      if (item.min <= score && item.max > score) {
        console.log(item.min, item.max);
        message = item;
      }
    });
    return message['message'];
  }

  async getRecentMissions(id: string | Types.ObjectId) {
    // user id 조회
    const user = await this.userModel.findById(id);
    // 미션 진행 중인 member 조회
    const members = await this.memberModel
      .find({
        parent: user._id,
        hasActiveMission: true,
      })
      .populate({
        path: 'missions',
        options: { sort: { createdAt: -1 } },
      });
    // 미션 12주차 이상 처리
    members.forEach((member) => {
      if (member['missions'].length) {
        if (member['missions'][0].week > 12) {
          member['missions'][0].week = 12;
          member.save();
        }
      }
    });
    return members;
  }

  async getMembersWithMissions(id: string) {
    const user = await this.userModel.findById(id);

    const finalMembers = await this.memberModel
      .find({ parent: user._id }, { avatar: 1, birth: 1, gender: 1, name: 1 })
      .populate({
        path: 'missions',
        options: { sort: { createdAt: -1 } },
        populate: { path: 'result', select: 'results' },
      });

    // 미션 12주차 이상 처리
    finalMembers.forEach((member) => {
      if (member['missions'].length) {
        if (member['missions'][0].week > 12) {
          member['missions'][0].week = 12;
          member.save();
        }
      }
    });

    return finalMembers;
  }

  async updateMissionWeek(id: string) {
    const mission = await this.missionModel.findById(id);

    // 최종 미션 시작일 대비 오늘 비교하여 몇주차 인지 체크
    const today = moment(new Date());
    const diff = today.diff(mission.startDate, 'weeks');
    if (diff > 0) {
      mission.week = mission.week + diff;
      mission.startDate = moment(mission.startDate).add(7, 'days').toDate();
      await mission.save();
    }
    return mission;
  }

  // mission 주차 처리
  async handleMissionWeek(member) {
    const mission = await this.missionModel.findOne({ owner: member._id });
    if (mission) {
      const d = new Date();
      const today = moment(d);
      const missionStartedDate = mission['createdAt'];
      const diff = today.diff(missionStartedDate, 'weeks');
      if (mission.isComplete && diff < 12) {
        mission.week = diff + 1;
        mission.isComplete = false;
        mission.save();
      } else if (diff >= 12) {
        mission.week = 12;
        mission.isComplete = false;
        mission.save();
      }
    }
  }

  async missionComplete(id: string) {
    const mission = await this.missionModel.findById(id);
    if (mission) {
      mission.isComplete = true;
      await mission.save();
    }
    return mission;
  }

  async getMissionSet(query: object) {
    const week = query['week'];
    const grade = query['grade'];
    const code = query['code'];
    const missionSet = await this.weekModel
      .findOne({ code: code, week: week })
      .populate('tasksHigh', 'title description tags term infant student')
      .populate('tasksNormal', 'title description tags term infant student')
      .populate('tasksLow', 'title description tags term infant student');

    // 미션 정보 생성
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
