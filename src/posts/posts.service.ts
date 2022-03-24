import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostCreateDto } from './dto/post.create.dto';
import { Post } from './post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  async getAllPost(query) {
    const posts = await this.postModel.find(query);
    return posts;
  }

  async getPost(id: string) {
    const post = await this.postModel.findOne({ _id: id });
    return post;
  }

  async createPost(payload: PostCreateDto) {
    const newPost = new this.postModel(payload);
    return await newPost.save();
  }
}
