import { Module } from '@nestjs/common';
import { PagesService, PostsService } from './posts.service';
import { PagesController, PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schema/post.schema';
import { Page, PageSchema } from './schema/page.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
  ],
  providers: [PostsService, PagesService],
  controllers: [PostsController, PagesController],
  exports: [MongooseModule],
})
export class PostsModule {}
