import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Post extends Document {
  @Prop()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  content: string;

  @Prop()
  @IsUrl()
  @IsOptional()
  thumbnail: string;

  @Prop()
  @IsDate()
  @IsOptional()
  startDate: Date;

  @Prop()
  @IsDate()
  @IsOptional()
  endDate: Date;

  @Prop({
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  isPublic: boolean;

  @Prop({
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  isNotice: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
