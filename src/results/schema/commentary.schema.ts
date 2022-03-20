import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Commentary extends Document {
  @Prop()
  code: string;

  @Prop()
  part: number;

  @Prop()
  grade: string;

  @Prop()
  content: string;
}

export const CommentarySchema = SchemaFactory.createForClass(Commentary);
