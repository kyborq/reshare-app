import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByLogin(login: string) {
    return await this.userModel.findOne({ login });
  }

  async findById(id: string) {
    return await this.userModel.findOne({ _id: id });
  }

  async setRefreshToken(id: string, token?: string) {
    return await this.userModel.updateOne({ _id: id, token: token || null });
  }
}
