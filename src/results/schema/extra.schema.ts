import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Extra extends Document {
  @Prop()
  code: string;

  @Prop()
  status: string;

  @Prop()
  title: string;

  @Prop()
  content: string;
}

export const ExtraSchema = SchemaFactory.createForClass(Extra);
