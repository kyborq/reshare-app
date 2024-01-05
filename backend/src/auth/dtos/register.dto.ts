import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  login: string;

  @IsString()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}