import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Rating extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: 'Mission',
    required: true,
  })
  mission: Types.ObjectId;

  @Prop()
  code: string;

  @Prop()
  week: number;

  @Prop()
  rating: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
