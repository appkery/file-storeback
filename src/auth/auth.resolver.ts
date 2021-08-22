import { Request, UseGuards } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GetAuthInput } from 'src/graphql';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Query('login')
  login(@Args('getAuthInput') getAuthInput: GetAuthInput) {
    return this.authService.login(getAuthInput);
  }
}
