import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserRequestDto } from '@/users/dto/users.request.dto';
import { UsersService } from '@/users/users.service';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from '@/auth/auth.service';
import { LoginRequestDto } from '@/auth/dto/login.request.dto';
import { JwtAuthGuard } from '@/auth/jwt/jwt.guard';
import { CurrentUser } from '@/common/decorators/user.decorator';
import { User } from './user.schema';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '전체 유저 가져오기' })
  @Get('all')
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: '현재 유저 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() user: User) {
    return user.readOnlyData;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('join')
  async join(@Body() body: UserRequestDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login(@Body() data: LoginRequestDto) {
    return await this.authService.jwtLogin(data);
  }
}
