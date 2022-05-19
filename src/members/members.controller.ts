import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { MemberCreateDto } from './dto/members.create.dto';
import { MemberUpdateDto } from './dto/members.update.dto';
import { MembersService } from './members.service';

@Controller('members')
@UseInterceptors(SuccessInterceptor)
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get(':id')
  async getMembers(@Param('id') id: string) {
    return this.membersService.getMembers(id);
  }

  @Get('simple-test-results/:id')
  async getMembersWithSimpleTestResults(@Param('id') id: string) {
    return this.membersService.getMembersWithSimpleTestResults(id);
  }

  @Put()
  async updateMember(@Body() body: MemberUpdateDto) {
    return this.membersService.updateMember(body);
  }

  @Delete(':id')
  async deleteMember(@Param('id') id: string) {
    return this.membersService.deleteMember(id);
  }

  @Post('create')
  async createMember(@Body() body: MemberCreateDto) {
    return this.membersService.createMember(body);
  }
}
