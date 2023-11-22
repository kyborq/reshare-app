import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [StorageModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
