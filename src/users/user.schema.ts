import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @IsNotEmpty()
  username: string;

  @Prop({ required: true })
  @IsNotEmpty()
  nickname: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Prop({ required: true })
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  birth: string;

  @Prop()
  @IsString()
  gender: string;

  @Prop()
  @IsString()
  recommander: string;

  // @Prop()
  // country: string;

  // @Prop()
  // accessLocation: string;

  readonly readOnlyData: {
    id: string;
    username: string;
    nickname: string;
    email: string;
  };
}

const _UserSchema = SchemaFactory.createForClass(User);

_UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this.id,
    username: this.username,
    nickname: this.nickname,
    email: this.email,
  };
});

_UserSchema.virtual('members', {
  ref: 'Member',
  localField: '_id',
  foreignField: 'parent',
});
_UserSchema.set('toObject', { virtuals: true });
_UserSchema.set('toJSON', { virtuals: true });

export const UserSchema = _UserSchema;
