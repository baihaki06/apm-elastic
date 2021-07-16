import { apm } from 'nestjs-apm';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as  dotenv  from 'dotenv';

dotenv.config();
async function bootstrap() {
  if (apm.isStarted()) {
    console.log('APM running');
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
