import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Auth } from 'src/graphql';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('login')
  login(@Args('auth') auth: Auth) {
    return this.authService.login(auth);
  }
}
