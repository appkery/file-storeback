import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtGuard } from './auth/guards/jwt.guard';
import { LocalGuard } from './auth/guards/local.guard';

@Controller()
export class AppController {
  constructor(
    // private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @UseGuards(LocalGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
