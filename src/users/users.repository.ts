import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from '@/users/user.schema';
import { UserRequestDto } from './dto/users.request.dto';
import { MemberSchema } from '@/members/member.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getAllUsers() {
    const MemberModel = mongoose.model('members', MemberSchema);

    const result = await this.userModel.find().populate('members', MemberModel);
    return result;
  }

  async findUserByIdWithoutPassword(
    userId: string | Types.ObjectId,
  ): Promise<User | null> {
    const user = await this.userModel.findById(userId).select('-password');
    return user;
  }

  async findUserByUsername(username: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username });
    return user;
  }

  async existByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.exists({ email });
    return result;
  }

  async create(user: UserRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }

  async getUsersForExcel() {
    const users = await this.userModel
      .find({})
      .select({ password: 0, __v: 0, _id: 0 })
      .sort('-createdAt');

    return users;
  }
}
