import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { GetAuthInput } from 'src/graphql';
import { Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/users/currentUser.decorator';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<unknown> {
    console.log('LocalStrategy')
    const user = await this.authService.validate(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
