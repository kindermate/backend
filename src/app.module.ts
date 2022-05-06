import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '@/common/middlewares/logger.middleware';
import { UsersModule } from '@/users/users.module';
import { AuthModule } from './auth/auth.module';
import { MembersModule } from './members/members.module';
import { AdminModule } from './admin/admin.module';
import { PostsModule } from './posts/posts.module';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';
import { MissionsModule } from './missions/missions.module';
import { MemosModule } from './memos/memos.module';
import { RatingsModule } from './ratings/ratings.module';
import { GuidesModule } from './guides/guides.module';
import { SimpleTestsModule } from './simple-tests/simple-tests.module';
import * as mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    UsersModule,
    AuthModule,
    MembersModule,
    AdminModule,
    PostsModule,
    TestsModule,
    ResultsModule,
    MissionsModule,
    MemosModule,
    RatingsModule,
    GuidesModule,
    SimpleTestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev);
  }
}
