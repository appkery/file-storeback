import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';
import { CreatePostInput, UpdatePostInput } from 'src/graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query('getPosts')
  findAll() {
    return this.postsService.findAll();
  }

  @Query('getPost')
  findOne(@Args('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation('createPost')
  @UseGuards(GqlJwtGuard)
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Mutation('updatePost')
  @UseGuards(GqlJwtGuard)
  update(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postsService.update(updatePostInput);
  }

  @Mutation('deletePost')
  @UseGuards(GqlJwtGuard)
  delete(@Args('id') id: number) {
    return this.postsService.delete(id);
  }
}
