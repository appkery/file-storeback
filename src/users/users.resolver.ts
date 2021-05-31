import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from 'src/graphql';
import { UpdateUserInput } from 'src/graphql';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Query('user')
  findUser(@Args('username') username: string) {
    return this.usersService.findUser(username);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
