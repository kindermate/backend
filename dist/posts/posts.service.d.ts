import { Model } from 'mongoose';
import { PostCreateDto } from './dto/post.create.dto';
import { Post } from './post.schema';
export declare class PostsService {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    getAllPost(query: any): Promise<Post[]>;
    getPost(id: string): Promise<Post>;
    createPost(payload: PostCreateDto): Promise<Post>;
}
