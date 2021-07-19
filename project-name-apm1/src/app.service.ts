import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // status  app run and 'APM Server transport error (ECONNREFUSED): connect ECONNREFUSED 127.0.0.1:8200'
    return 'Hello APM from nest with module nestjs-apm';
  }
}
