import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { GetAuthInput } from 'src/graphql';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(getAuthInput: GetAuthInput): Promise<unknown> {
    const user = await this.authService.validate(getAuthInput);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
