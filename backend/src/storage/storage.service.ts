import * as Minio from 'minio';
import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { Mongoose } from 'mongoose';

@Injectable()
export class StorageService {
  private readonly minio: Minio.Client;
  private readonly mongo: Mongoose;

  constructor() {
    this.minio = new Minio.Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'K24PGLec2Tapn8l5tSVt',
      secretKey: 'Mjhk87io0A7SOJYdiTT19kNV2Qhn4xpUzswzz5qG',
    });
  }

  async uploadFile(buffer: Buffer, fileName: string): Promise<void> {
    const readableStream: Readable = new Readable();
    readableStream._read = () => {};
    readableStream.push(buffer);
    readableStream.push(null);

    await this.minio.putObject('reshare', fileName, readableStream);
  }

  async getFile(fileName: string): Promise<Readable> {
    return await this.minio.getObject('reshare', fileName);
  }
}
