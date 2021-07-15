import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // config apm
  const apm = require('elastic-apm-node').start({
    serviceName: 'nestapm',
    secretToken: 'VYpMojUjGe77Oe7HmP',
    serverUrl:
      'https://faa6b3a5b0484f358c641362b0f5e63f.apm.us-west1.gcp.cloud.es.io:443',
    environment: 'production',
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3200);
}
bootstrap();
