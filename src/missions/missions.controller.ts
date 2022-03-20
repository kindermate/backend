import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('missions')
@UseInterceptors(SuccessInterceptor)
export class MissionsController {
  constructor(private readonly missionService: MissionsService) {}

  @Get('weeks')
  async getMissionSet(@Query() query: object) {
    return await this.missionService.getMissionSet(query);
  }

  // id는 user._id
  @Get(':id')
  async getMembersWithMissions(@Param('id') id: string) {
    return await this.missionService.getMembersWithMissions(id);
  }

  @Patch('rating')
  async saveRating(@Body() body: object) {
    return await this.missionService.saveRating(body);
  }
}
