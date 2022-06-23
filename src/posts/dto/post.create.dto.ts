import { PickType } from '@nestjs/swagger';
import { Post } from '@/posts/schema/post.schema';

export class PostCreateDto extends PickType(Post, [
  'title',
  'content',
  'thumbnail',
  'startDate',
  'endDate',
  'isPublic',
  'isNotice',
] as const) {}
