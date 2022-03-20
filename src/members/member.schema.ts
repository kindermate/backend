import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
  collection: 'members',
};

@Schema(options)
export class Member extends Document {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  })
  @IsNotEmpty()
  parent: Types.ObjectId;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  birth: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @Prop()
  avatar: number;
}

const _MemberSchema = SchemaFactory.createForClass(Member);

_MemberSchema.virtual('results', {
  ref: 'Result',
  localField: '_id',
  foreignField: 'owner',
});
_MemberSchema.virtual('missions', {
  ref: 'Mission',
  localField: '_id',
  foreignField: 'owner',
});
_MemberSchema.set('toObject', { virtuals: true });
_MemberSchema.set('toJSON', { virtuals: true });

export const MemberSchema = _MemberSchema;
