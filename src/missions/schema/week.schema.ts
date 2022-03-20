import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Week extends Document {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  week: number;

  @Prop()
  part: number;

  @Prop({ type: [Types.ObjectId], ref: 'Task' })
  tasksHigh: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Task' })
  tasksNormal: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Task' })
  tasksLow: Types.ObjectId[];
}

export const WeekSchema = SchemaFactory.createForClass(Week);
