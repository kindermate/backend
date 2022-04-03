import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('missions')
@UseInterceptors(SuccessInterceptor)
export class MissionsController {
  constructor(private readonly missionService: MissionsService) {}

  @Get('recent/:id')
  async getRecentMission(@Param('id') id: string) {
    return await this.missionService.getRecentMissions(id);
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
}
