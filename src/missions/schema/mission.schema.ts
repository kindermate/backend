import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Mission extends Document {
  @Prop({
    required: true,
    ref: 'Member',
    type: Types.ObjectId,
  })
  owner: Types.ObjectId;

  @Prop({
    required: true,
    ref: 'Result',
    type: Types.ObjectId,
  })
  result: Types.ObjectId;

  @Prop()
  week: number;

  @Prop()
  isComplete: boolean;

  @Prop({
    default: false,
  })
  isFinished: boolean;
}

export const MissionSchema = SchemaFactory.createForClass(Mission);
