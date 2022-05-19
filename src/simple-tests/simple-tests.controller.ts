import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { SimpleTestsService } from './simple-tests.service';

@Controller('simple-tests')
@UseInterceptors(SuccessInterceptor)
export class SimpleTestsController {
  constructor(private readonly simpleTestService: SimpleTestsService) {}

  // 간단검사 리스트
  // 오픈 기간으로 쿼리
  @Get()
  async getSimpleTestAll() {
    return this.simpleTestService.getSimpleTestAll();
  }

  // 간단검사 단일 조회
  @Get(':id')
  async getSimpleTestOne(@Param('id') id: string) {
    return this.simpleTestService.getSimpleTestOne(id);
  }

  // 간단검사 코드로 조회
  @Get('code/:code')
  async getSimpleTestOneByCode(@Param('code') code: string) {
    return this.simpleTestService.getSimpleTestOneByCode(code);
  }

  // 간단검사 문항 fetch
  @Get('question/:code')
  async getSimpleTestQuestion(@Param('code') code: string) {
    return this.simpleTestService.getSimpleTestQuestions(code);
  }

  // 간단검사 결과 가이드 조회
  @Get('result/comment')
  async getSimpleTestResultComment(
    @Query('code') code: string,
    @Query('grade') grade: string,
  ) {
    return this.simpleTestService.getSimpleTestResultComment(code, grade);
  }

  // 멤버, 코드로 결과 조회
  @Get('result/all')
  async getSimpleTestResultAll(
    @Query('code') code: string,
    @Query('owner') owner: string,
  ) {
    return this.simpleTestService.getSimpleTestResultAll(code, owner);
  }

  // 단일 결과 조회
  @Get('result/:id')
  async getSimpleTestResultOne(@Param('id') id: string) {
    console.log(id);
    return this.simpleTestService.getSimpleTestResultOne(id);
  }

  // 결과 생성
  @Post('result')
  async saveResult(@Body() body: object) {
    return this.simpleTestService.saveResult(body);
  }
}
