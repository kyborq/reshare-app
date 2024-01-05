import { Request, Response } from 'express';
import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { RefreshTokenGuard } from 'src/common/guards/refresh-token.guard';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() credentials: LoginDto,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.login(credentials);

    response.cookie('jwt', accessToken, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 1000 * 60,
    });

    response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return {
      message: 'Logged in successfully.',
    };
  }

  @Post('register')
  async register() {
    // ...
  }

  @Post('logout')
  @UseGuards(AccessTokenGuard)
  async logout(
    @Res({ passthrough: true }) response: Response,
    @Req() req: Request,
  ) {
    const userId = req.user['sub'];
    this.authService.logout(userId);

    response.clearCookie('jwt', { path: '/' });
    response.clearCookie('refreshToken', { path: '/' });
  }

  @Post('refresh')
  @UseGuards(RefreshTokenGuard)
  async refresh(@Req() req: Request) {
    // const userId = req.user['sub'];
    // const refreshToken = req.user['refreshToken'];
    console.log(req.user);
    // this.authService.refreshTokens(userId, refreshToken);
  }
}
