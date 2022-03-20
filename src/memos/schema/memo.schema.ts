import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Memo extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: 'Mission',
    required: true,
  })
  mission: Types.ObjectId;

  @Prop()
  content: string;
}

export const MemoSchema = SchemaFactory.createForClass(Memo);
