import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    StorageModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
