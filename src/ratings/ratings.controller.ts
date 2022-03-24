import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { RatingsService } from './ratings.service';

@Controller('ratings')
@UseInterceptors(SuccessInterceptor)
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Get()
  async getRating(@Query() query: object) {
    return this.ratingsService.getRating(query);
  }

  @Post()
  async saveRating(@Body() body: object) {
    return await this.ratingsService.saveRating(body);
  }
}
