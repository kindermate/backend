import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AnswerCreateDto } from './dto/answer.create.dto';
import { TestsService } from './tests.service';

@Controller('tests')
@UseInterceptors(SuccessInterceptor)
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('questions/:code')
  async getQuestion(@Param('code') code: string) {
    return this.testsService.getAllQuestion(code);
  }

  @Get(':code')
  async getTest(@Param('code') code: string) {
    return this.testsService.getTest(code);
  }

  @Post('answer')
  async createAnswer(@Body() body: AnswerCreateDto) {
    return this.testsService.createAnswer(body);
  }
}
