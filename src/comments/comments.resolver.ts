import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCommentInput, UpdateCommentInput } from 'src/graphql';
import { CommentsService } from './comments.service';

@Resolver('Comment')
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Query('getComments')
  findAll() {
    return this.commentsService.findAll();
  }

  @Query('getComment')
  findOne(@Args('id') id: number) {
    return this.commentsService.findOne(id);
  }

  @Mutation('createComment')
  create(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentsService.create(createCommentInput);
  }

  @Mutation('updateComment')
  update(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentsService.update(updateCommentInput);
  }

  @Mutation('deleteComment')
  delete(@Args('id') id: number) {
    return this.commentsService.delete(id);
  }
}
