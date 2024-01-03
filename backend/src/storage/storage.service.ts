import * as Minio from 'minio';
import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { InjectModel } from '@nestjs/mongoose';
import { Upload, UploadDocument } from './schemas/file.schema';
import { Model } from 'mongoose';
import { InjectMinio } from 'nestjs-minio';
import * as crypto from 'crypto';

@Injectable()
export class StorageService {
  constructor(
    @InjectModel(Upload.name) private uploadModel: Model<UploadDocument>,
    @InjectMinio() private readonly minioClient: Minio.Client,
  ) {}

  hashFileName(fileName: string): string {
    return crypto.createHash('sha256').update(fileName).digest('hex');
  }

  async uploadFile(
    buffer: Buffer,
    fileName: string,
    userId: string,
  ): Promise<void> {
    const readableStream: Readable = new Readable();
    readableStream._read = () => {};
    readableStream.push(buffer);
    readableStream.push(null);

    const hashedFileName = this.hashFileName(fileName);

    const upload = await this.uploadModel.create({
      alias: fileName,
      uploadDate: new Date(),
      fileName: hashedFileName,
      user: userId,
    });
    upload.save();
    await this.minioClient.putObject('reshare', hashedFileName, readableStream);
  }

  async getFile(fileName: string): Promise<Readable> {
    return await this.minioClient.getObject('reshare', fileName);
  }

  async getAllFiles(userId: string) {
    const result = await this.uploadModel
      .find({
        user: userId,
      })
      .exec();

    return result;
  }
}
