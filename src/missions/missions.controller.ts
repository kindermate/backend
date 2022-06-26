import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Controller,
  Get,
  Param,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('mission')
@UseInterceptors(SuccessInterceptor)
export class MissionController {
  constructor(private readonly missionService: MissionsService) {}

  @Get(':id')
  async getMission(@Param('id') id: string) {
    return await this.missionService.getMission(id);
  }

  @Get('finish/:id')
  async finishMission(@Param('id') id: string) {
    return await this.missionService.finishMission(id);
  }
}

@Controller('missions')
@UseInterceptors(SuccessInterceptor)
export class MissionsController {
  constructor(private readonly missionService: MissionsService) {}

  // 임시: startDate 추가하기
  // @Get('add-startdate')
  // async addStartDate() {
  //   return await this.missionService.addStartDate();
  // }

  @Get('recent/:id')
  async getRecentMission(@Param('id') id: string) {
    return await this.missionService.getRecentMissions(id);
  }

  @Get('message/closing/:score')
  async getMessageForFinish(@Param('score') score: number) {
    return await this.missionService.getMessageForClosing(score);
  }

  @Get('message/:score')
  async getMessageWithScore(@Param('score') score: number) {
    return await this.missionService.getMessageWithScore(score);
  }

  @Put('next/:id')
  async updateMissionWeek(@Param('id') id: string) {
    return await this.missionService.updateMissionWeek(id);
  }

  @Get('weeks')
  async getMissionSet(@Query() query: object) {
    return await this.missionService.getMissionSet(query);
  }

  // id는 user._id
  @Get(':id')
  async getMembersWithMissions(@Param('id') id: string) {
    return await this.missionService.getMembersWithMissions(id);
  }

  @Put(':id')
  async missionComplete(@Param('id') id: string) {
    return await this.missionService.missionComplete(id);
  }
}
