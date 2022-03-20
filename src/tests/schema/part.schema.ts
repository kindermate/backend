import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Part extends Document {
  @Prop()
  code: string;

  @Prop()
  areaCode: number;

  @Prop()
  title: string;

  @Prop()
  subTitle: string;

  @Prop()
  description: string;
}

export const PartSchema = SchemaFactory.createForClass(Part);
