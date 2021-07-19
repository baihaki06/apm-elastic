import { apm } from 'nestjs-apm';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  if (apm.isStarted()) {
    console.log('APM running');
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(2345);
}
bootstrap();
