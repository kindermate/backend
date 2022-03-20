import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Message extends Document {
  @Prop()
  message: string;

  @Prop()
  score: number;

  @Prop()
  min: number;

  @Prop()
  max: number;

  @Prop()
  isClosing: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
