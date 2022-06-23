import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Page extends Document {
  @Prop()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  content: string;
}

export const PageSchema = SchemaFactory.createForClass(Page);
