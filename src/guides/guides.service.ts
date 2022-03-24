import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Guide } from './schema/guide.schema';

@Injectable()
export class GuidesService {
  constructor(
    @InjectModel(Guide.name)
    private readonly guideModel: Model<Guide>,
  ) {}

  async getGuides(query: object) {
    const guideCTT = await this.guideModel.findOne({
      extraGrade: query['CTT'],
    });
    const guidePBT = await this.guideModel.findOne({ code: 'PBT' });
    const result = {
      CTT: guideCTT,
      PBT: guidePBT,
    };
    return result;
  }
}
