import { User } from '../schemas/user.schema';

export class UserDto {
  public id: string;
  public login: string;

  constructor(user: User) {
    this.id = user._id;
    this.login = user.login;
  }
}
