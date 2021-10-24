import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInput, Post, UpdatePostInput } from 'src/graphql';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    return await this.postsRepository.findOne(id);
  }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    return await this.postsRepository.save(createPostInput);
  }

  async update(updatePostInput: UpdatePostInput): Promise<unknown> {
    return await this.postsRepository.save(updatePostInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.postsRepository.delete(id);
  }
}
