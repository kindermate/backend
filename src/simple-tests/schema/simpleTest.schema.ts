import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SimpleTest extends Document {
  @Prop()
  code: string;

  @Prop()
  title: string;

  @Prop()
  subTitle: string;

  @Prop()
  description: string;

  @Prop()
  activationStartDate: Date;

  @Prop()
  activationLastDate: Date;
}

export const SimpleTestSchema = SchemaFactory.createForClass(SimpleTest);
