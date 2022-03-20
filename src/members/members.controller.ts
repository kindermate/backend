import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { MemberCreateDto } from './dto/members.create.dto';
import { MembersService } from './members.service';

@Controller('members')
@UseInterceptors(SuccessInterceptor)
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get(':id')
  async getMembers(@Param('id') id: string) {
    return this.membersService.getMembers(id);
  }

  @Post('create')
  async createMember(@Body() body: MemberCreateDto) {
    return this.membersService.createMember(body);
  }
}
