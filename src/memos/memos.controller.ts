import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { MemoCreateDto } from './dto/memo.create.dto';
import { MemosService } from './memos.service';

@Controller('memos')
@UseInterceptors(SuccessInterceptor)
export class MemosController {
  constructor(private readonly memosService: MemosService) {}

  @Get(':id')
  async getMemo(@Param('id') id: string) {
    return await this.memosService.getMemo(id);
  }

  @Post()
  async createMemo(@Body() body: MemoCreateDto) {
    return await this.memosService.createMemo(body);
  }
}
