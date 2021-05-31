import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserInput } from 'src/graphql';
import { UpdateUserInput } from 'src/graphql';
import { User } from 'src/graphql';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.usersRepository.save(createUserInput);
  }

  async update(updateUserInput: UpdateUserInput): Promise<User> {
    return await this.usersRepository.save(updateUserInput);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async findUser(username: string): Promise<User> {
    return await this.usersRepository.findOneOrFail({ username: username });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
