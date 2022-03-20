import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
@UseInterceptors(SuccessInterceptor)
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get(':id')
  async getResultAll(@Param('id') id: string) {
    return this.resultsService.getResultAll(id);
  }
}

@Controller('commentary')
@UseInterceptors(SuccessInterceptor)
export class CommentaryController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get()
  async getCommentary(@Query() query: string) {
    return await this.resultsService.getCommentary(query);
  }
}

@Controller('extra')
@UseInterceptors(SuccessInterceptor)
export class ExtraContoller {
  constructor(private readonly resultsService: ResultsService) {}

  @Get()
  async getExtra(@Query() query: string) {
    console.log(query);
    return '';
  }
}
