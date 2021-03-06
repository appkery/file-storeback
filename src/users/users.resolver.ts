import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { GetUserInput, CreateUserInput, UpdateUserInput } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from './currentUser.decorator';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('getUsers')
  @UseGuards(GqlJwtGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Query('getUser')
  @UseGuards(GqlJwtGuard)
  findOne(@CurrentUser() getUserInput: GetUserInput) {
    return this.usersService.findUser(getUserInput.username);
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation('updateUser')
  @UseGuards(GqlJwtGuard)
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation('deleteUser')
  @UseGuards(GqlJwtGuard)
  delete(@Args('id') id: number) {
    return this.usersService.delete(id);
  }
}
