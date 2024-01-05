import { User } from '../schemas/user.schema';

export class UserDto {
  public id: string;
  public login: string;
  public email: string;

  constructor(user: User) {
    this.id = user._id;
    this.login = user.login;
    this.email = user.email;
  }
}
