import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Question extends Document {
  @Prop()
  code: string;

  @Prop()
  part: string;

  @Prop()
  order: number;

  @Prop()
  question: string;

  @Prop({
    default: false,
  })
  isInverse: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
