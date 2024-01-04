import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dtos/credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(credentials: LoginDto) {
    const user = await this.usersService.findByLogin(credentials.login);

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    if (user.password !== credentials.password) {
      throw new BadRequestException('Password or login are incorrect');
    }

    const tokens = await this.getTokens(user._id, user.login);
    await this.updateRefreshToken(user._id, tokens.refreshToken);

    return tokens;
  }

  async logout(id: string) {
    await this.usersService.setRefreshToken(id);
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);

    if (!user || !user.token) {
      throw new ForbiddenException('Access Denied');
    }
    console.log('писька', refreshToken);
    const refreshTokenMatches = await argon2.verify(user.token, refreshToken);

    if (!refreshTokenMatches) {
      throw new ForbiddenException('Access Denied');
    }

    const tokens = await this.getTokens(user.id, user.login);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async updateRefreshToken(id: string, token: string) {
    const refreshToken = await argon2.hash(token);
    await this.usersService.setRefreshToken(id, refreshToken);
  }

  async getTokens(id: string, login: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: id, login },
        {
          secret: this.configService.get('JWT_ACCESS_SECRET'),
          expiresIn: '1m',
        },
      ),

      this.jwtService.signAsync(
        { sub: id, login },
        {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: '30d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
