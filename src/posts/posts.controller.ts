import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PostCreateDto } from './dto/post.create.dto';
import { PagesService, PostsService } from './posts.service';

@Controller('posts')
@UseInterceptors(SuccessInterceptor)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(@Query() query: object) {
    return this.postsService.getAllPost(query);
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return this.postsService.getPost(id);
  }

  @Post('create')
  async createPost(@Body() body: PostCreateDto) {
    return this.postsService.createPost(body);
  }
}

@Controller('pages')
@UseInterceptors(SuccessInterceptor)
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get(':id')
  async getPage(@Param('id') id: string) {
    console.log(id);
    return this.pagesService.getPage(id);
  }
}
