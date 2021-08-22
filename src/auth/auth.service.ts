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

  async validate(getAuthInput: GetAuthInput): Promise<unknown> {
    const user = await this.usersService.findUser(getAuthInput.username);
    if (user && user.password === getAuthInput.password) {
      const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(getAuthInput: GetAuthInput): Promise<LoginResult> {
    const payload = { username: getAuthInput.username, password: getAuthInput.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
