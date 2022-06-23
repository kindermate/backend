import { PostCreateDto } from './dto/post.create.dto';
import { PagesService, PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(query: object): Promise<import("./schema/post.schema").Post[]>;
    getPost(id: string): Promise<import("./schema/post.schema").Post>;
    createPost(body: PostCreateDto): Promise<import("./schema/post.schema").Post>;
}
export declare class PagesController {
    private readonly pagesService;
    constructor(pagesService: PagesService);
    getPage(id: string): Promise<import("./schema/page.schema").Page>;
}
