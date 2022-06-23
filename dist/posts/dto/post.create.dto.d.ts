import { Post } from '@/posts/schema/post.schema';
declare const PostCreateDto_base: import("@nestjs/common").Type<Pick<Post, "title" | "content" | "thumbnail" | "startDate" | "endDate" | "isPublic" | "isNotice">>;
export declare class PostCreateDto extends PostCreateDto_base {
}
export {};
