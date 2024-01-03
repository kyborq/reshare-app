import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Upload, UploadSchema } from './schemas/file.schema';
import { NestMinioModule } from 'nestjs-minio';

@Module({
  imports: [
    NestMinioModule.register({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'V6BdGv982ZKrVUgfAZBo',
      secretKey: 'SRysbvyFI9YoyIK3U9uCDRg5EKPpjFOkQO9rsOaS',
    }),
    MongooseModule.forFeature([{ name: Upload.name, schema: UploadSchema }]),
  ],
  controllers: [StorageController],
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {}
