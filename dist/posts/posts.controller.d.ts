import { PostCreateDto } from './dto/post.create.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(query: object): Promise<import("./post.schema").Post[]>;
    getPost(id: string): Promise<import("./post.schema").Post>;
    createPost(body: PostCreateDto): Promise<import("./post.schema").Post>;
}
