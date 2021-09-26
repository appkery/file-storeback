import { Request, UseGuards } from '@nestjs/common';
import { Args, Query, Mutation } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GetAuthInput } from 'src/graphql';
import { CurrentUser } from 'src/users/currentUser.decorator';
import { AuthService } from './auth.service';
import { GqlLocalGuard } from './guards/gql-local.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  @UseGuards(GqlLocalGuard)
  login(@CurrentUser() getAuthInput: GetAuthInput) {
    return this.authService.login(getAuthInput);
  }
}
