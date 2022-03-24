import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rating, RatingSchema } from './schema/rating.schema';
import { Mission, MissionSchema } from '@/missions/schema/mission.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rating.name, schema: RatingSchema }]),
    MongooseModule.forFeature([{ name: Mission.name, schema: MissionSchema }]),
  ],
  providers: [RatingsService],
  controllers: [RatingsController],
  // exports: [MongooseModule],
})
export class RatingsModule {}
