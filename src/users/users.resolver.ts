import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { GetUserInput, CreateUserInput, UpdateUserInput } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt.guard';
import { CurrentUser } from './currentUser.decorator';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('getUser')
  // @UseGuards(GqlJwtGuard)
  findOne(/* @CurrentUser('getUserInput') */@Args('getUserInput') getUserInput: GetUserInput) {
    return this.usersService.findOne(getUserInput.id);
  }
 
  @Query('getUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation('deleteUser')
  delete(@Args('id') id: number) {
    return this.usersService.delete(id);
  }
}
