import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { MemoCreateDto } from './dto/memo.create.dto';
import { MemoUpdateDto } from './dto/memo.update.dto';
import { MemosService } from './memos.service';

@Controller('memos')
@UseInterceptors(SuccessInterceptor)
export class MemosController {
  constructor(private readonly memosService: MemosService) {}

  @Get(':id')
  async getMemoOne(@Param('id') id: string) {
    return await this.memosService.getMemoOne(id);
  }

  @Put()
  async updateMemo(@Body() body: MemoUpdateDto) {
    return await this.memosService.updateMemo(body);
  }

  @Delete(':id')
  async deleteMemo(@Param('id') id: string) {
    return await this.memosService.deleteMemo(id);
  }

  @Get()
  async getMemosOfMission(@Query() query: object) {
    return await this.memosService.getMemosOfMission(query);
  }

  @Post()
  async createMemo(@Body() body: MemoCreateDto) {
    return await this.memosService.createMemo(body);
  }
}
