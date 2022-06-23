import { Model } from 'mongoose';
import { PostCreateDto } from './dto/post.create.dto';
import { Page } from './schema/page.schema';
import { Post } from './schema/post.schema';
export declare class PostsService {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    getAllPost(query: any): Promise<Post[]>;
    getPost(id: string): Promise<Post>;
    createPost(payload: PostCreateDto): Promise<Post>;
}
export declare class PagesService {
    private readonly pageModel;
    constructor(pageModel: Model<Page>);
    getPage(id: string): Promise<Page>;
}
