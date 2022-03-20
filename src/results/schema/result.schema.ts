import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Result extends Document {
  @Prop({
    required: true,
    ref: 'Member',
    type: Types.ObjectId,
  })
  owner: Types.ObjectId;

  @Prop({
    required: true,
    type: Object,
  })
  results: object;
}

export const ResultSchema = SchemaFactory.createForClass(Result);
