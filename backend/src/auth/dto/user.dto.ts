import { User } from '../schemas/user.schema';

export class UserDto {
  constructor(user: User) {
    this.id = user.id;
    this.login = user.login;
  }

  id: string;
  login: string;
}
