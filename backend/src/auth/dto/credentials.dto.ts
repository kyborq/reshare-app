import { IsString, MinLength } from 'class-validator';

export class CredentialsDto {
  @IsString()
  login: string;

  @IsString()
  @MinLength(8)
  password: string;
}
