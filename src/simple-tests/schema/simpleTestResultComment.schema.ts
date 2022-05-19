import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SimpleTestResultComment extends Document {
  @Prop()
  code: string;

  @Prop()
  grade: string;

  @Prop()
  comment: string;

  @Prop()
  content: string;
}

export const SimpleTestResultCommentSchema = SchemaFactory.createForClass(
  SimpleTestResultComment,
);
