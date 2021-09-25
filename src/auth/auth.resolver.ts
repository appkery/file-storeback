import { Request, UseGuards } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GetAuthInput } from 'src/graphql';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt.guard';
import { LocalGuard } from './guards/local.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('login')
  @UseGuards(GqlLocalGuard)
  login(@Args('getAuthInput') getAuthInput: GetAuthInput) {
    return this.authService.login(getAuthInput);
  }
}
