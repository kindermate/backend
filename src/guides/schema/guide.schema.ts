import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Guide extends Document {
  @Prop({
    required: true,
  })
  code: string;

  @Prop()
  extraGrade: string;

  @Prop()
  content: string;
}

export const GuideSchema = SchemaFactory.createForClass(Guide);
