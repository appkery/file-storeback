import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Mutation('updatePost')
  update(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postsService.update(updatePostInput);
  }

  @Mutation('deletePost')
  delete(@Args('id') id: number) {
    return this.postsService.delete(id);
  }
}
