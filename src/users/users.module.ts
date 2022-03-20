import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '@/users/users.controller';
import { User, UserSchema } from '@/users/user.schema';
import { UsersService } from '@/users/users.service';
import { UsersRepository } from '@/users/users.repository';
import { AuthModule } from '@/auth/auth.module';
import { Member, MemberSchema } from '@/members/member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Member.name, schema: MemberSchema },
    ]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository, MongooseModule],
})
export class UsersModule {}
