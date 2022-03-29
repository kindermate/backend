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
import { CheckPasswordDto } from '@/auth/dto/checkPassword.dto';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Get('all')
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() user: User) {
    return user.readOnlyData;
  }

  @Post('join')
  async join(@Body() body: UserRequestDto) {
    return await this.usersService.signUp(body);
  }

  @Post('login')
  async login(@Body() data: LoginRequestDto) {
    return await this.authService.jwtLogin(data);
  }

  @Post('check-password')
  async checkPassword(@Body() data: CheckPasswordDto) {
    return await this.authService.checkPassword(data);
  }
}
