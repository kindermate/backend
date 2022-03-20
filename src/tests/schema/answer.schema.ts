import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Answer extends Document {
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
  answers: object;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
