import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { GuidesService } from './guides.service';

@Controller('guides')
@UseInterceptors(SuccessInterceptor)
export class GuidesController {
  constructor(private readonly guidesService: GuidesService) {}

  @Get()
  async getGuides(@Query() query: object) {
    console.log(query);
    return this.guidesService.getGuides(query);
  }
}
