import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: CredentialsDto) {
    const user = await this.authService.findOne(credentials);
    const userDto = new UserDto(user);
    return userDto;
  }

  @Post('register')
  async register(@Body() credentials: CredentialsDto) {
    this.authService.create(credentials);
  }
}
