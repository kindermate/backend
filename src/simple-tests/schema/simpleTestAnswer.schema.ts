import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class SimpleTestAnswer extends Document {
  @Prop({
    required: true,
    ref: 'Member',
    type: Types.ObjectId,
  })
  owner: Types.ObjectId;

  @Prop({
    required: true,
    type: Array,
  })
  answers: object;
}

export const SimpleTestAnswerSchema =
  SchemaFactory.createForClass(SimpleTestAnswer);
