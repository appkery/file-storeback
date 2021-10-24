import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Comment, CreateCommentInput, UpdateCommentInput } from 'src/graphql';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return await this.commentsRepository.find();
  }

  async findOne(id: number): Promise<Comment> {
    return await this.commentsRepository.findOne(id);
  }

  async create(createCommentInput: CreateCommentInput): Promise<Comment> {
    return await this.commentsRepository.save(createCommentInput);
  }

  async update(updateCommentInput: UpdateCommentInput): Promise<unknown> {
    return await this.commentsRepository.save(updateCommentInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.commentsRepository.delete(id);
  }
}
