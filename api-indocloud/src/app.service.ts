import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // status run and success send data to kibana
    return 'Hello APM from nestjs with module elastic-apm-nest';
  }
}
