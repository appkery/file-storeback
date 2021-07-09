import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'src/graphql';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(auth: Auth) {
    const payload = { username: auth.username, password: auth.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
