import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApmModule } from 'nestjs-apm';

@Module({
  imports: [ApmModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
