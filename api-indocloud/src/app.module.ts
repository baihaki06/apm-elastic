import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApmModule } from 'elastic-apm-nest';

@Module({
  imports: [ApmModule.forRootAsync()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
