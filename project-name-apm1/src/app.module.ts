import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApmModule } from 'nestjs-apm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ApmModule.register(), ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}