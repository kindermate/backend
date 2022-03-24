import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuidesController } from './guides.controller';
import { GuidesService } from './guides.service';
import { Guide, GuideSchema } from './schema/guide.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guide.name, schema: GuideSchema }]),
  ],
  controllers: [GuidesController],
  providers: [GuidesService],
  exports: [MongooseModule],
})
export class GuidesModule {}
