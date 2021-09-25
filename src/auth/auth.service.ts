import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { GetAuthInput, LoginResult } from 'src/graphql';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validate(username: string, password: string): Promise<unknown> {
    const user = await this.usersService.findUser(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(getAuthInput: GetAuthInput): Promise<LoginResult> {
    const payload = { username: getAuthInput.username, sub: getAuthInput.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
