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
//   serviceName: '',
//   secretToken: '',
//   serverUrl: '',
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
