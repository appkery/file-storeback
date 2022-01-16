import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';
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
  @UseGuards(GqlJwtGuard)
  create(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return this.commentsService.create(createCommentInput);
  }

  @Mutation('updateComment')
  @UseGuards(GqlJwtGuard)
  update(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentsService.update(updateCommentInput);
  }

  @Mutation('deleteComment')
  @UseGuards(GqlJwtGuard)
  delete(@Args('id') id: number) {
    return this.commentsService.delete(id);
  }
}
