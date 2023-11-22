import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CredentialsDto } from './dto/credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async findOne(credentials: CredentialsDto): Promise<User> {
    return await this.model
      .findOne({
        login: credentials.login,
        password: credentials.password,
      })
      .exec();
  }

  async create(credentials: CredentialsDto): Promise<User> {
    return await new this.model({
      ...credentials,
      createdAt: new Date(),
    }).save();
  }
}
