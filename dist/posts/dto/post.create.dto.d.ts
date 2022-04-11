import { Post } from '@/posts/post.schema';
declare const PostCreateDto_base: import("@nestjs/common").Type<Pick<Post, "startDate" | "title" | "content" | "thumbnail" | "endDate" | "isPublic" | "isNotice">>;
export declare class PostCreateDto extends PostCreateDto_base {
}
export {};
