import { IsString, MinLength } from 'class-validator';

export class LoginCredentialsDto {
  @IsString()
  login: string;

  @IsString()
  @MinLength(8)
  password: string;
}
