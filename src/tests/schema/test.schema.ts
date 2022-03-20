import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Test extends Document {
  @Prop()
  code: string;

  @Prop()
  title: string;

  @Prop()
  subTitle: string;

  @Prop()
  description: string;

  @Prop()
  notice: string;

  @Prop()
  time: number;
}

export const TestSchema = SchemaFactory.createForClass(Test);
