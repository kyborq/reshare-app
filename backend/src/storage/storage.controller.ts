import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { StorageService } from './storage.service';
import { Request } from 'express';
import { UploadDto } from './dtos/upload.dto';

@Controller('storage')
@UseGuards(AccessTokenGuard)
export class StorageController {
  constructor(private minioService: StorageService) {}

  @Get()
  async getAllFiles(@Req() request: Request) {
    const userId = request.user['sub'];
    const files = await this.minioService.getAllFiles(userId);

    return files.map((file) => new UploadDto(file));
  }

  @Get(':name')
  async getFile(@Param('name') name: string) {
    const file = await this.minioService.getFile(name);

    return file;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Req() request: Request,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = request.user['sub'];
    await this.minioService.uploadFile(file.buffer, file.originalname, userId);
    return { message: 'Successfully uploaded file' };
  }
}
