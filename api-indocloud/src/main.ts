import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3020);
}
bootstrap();

// import {
//   APM_MIDDLEWARE,
//   ApmErrorInterceptor,
//   ApmHttpUserContextInterceptor,
//   initializeAPMAgent,
// } from 'elastic-apm-nest';

// initializeAPMAgent({
//   serviceName: 'apmhapijs',
 // secretToken: 'VYpMojUjGe77Oe7HmP',
 // serverUrl: 'https://faa6b3a5b0484f358c641362b0f5e63f.apm.us-west1.gcp.cloud.es.io:443',
 // environment: 'production'
// });

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   const apmMiddleware = app.get(APM_MIDDLEWARE);
//   const globalInterceptors = [
//     app.get(ApmHttpUserContextInterceptor),
//     app.get(ApmErrorInterceptor),
//   ];

//   app.useGlobalInterceptors(...globalInterceptors);

//   app.use(apmMiddleware);
//   await app.listen(3020);
// }
// bootstrap();
