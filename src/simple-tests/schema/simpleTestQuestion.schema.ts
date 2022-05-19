import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SimpleTestQuestion extends Document {
  @Prop()
  code: string;

  @Prop()
  order: number;

  @Prop()
  question: string;

  @Prop({
    default: false,
  })
  isInverse: boolean;
}

export const SimpleTestQuestionSchema =
  SchemaFactory.createForClass(SimpleTestQuestion);
