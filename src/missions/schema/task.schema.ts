import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Task extends Document {
  @Prop()
  code: string;

  @Prop()
  part: number;

  @Prop()
  term: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  infant: string;

  @Prop()
  student: string;

  @Prop()
  tags: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
