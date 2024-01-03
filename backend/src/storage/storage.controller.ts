import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { StorageService } from './storage.service';

@Controller('storage')
@UseGuards(AccessTokenGuard)
export class StorageController {
  constructor(private minioService: StorageService) {}

  @Get('echo')
  async helloWorld() {
    return { message: 'Hello world!' };
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    await this.minioService.uploadFile(file.buffer, file.originalname);
    return { message: 'Successfully uploaded file' };
  }
}
