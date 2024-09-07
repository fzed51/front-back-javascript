import { Controller, Get } from '@nestjs/common';
import { version } from '../package.json';

@Controller()
export class AppController {
  @Get('ping')
  ping() {
    return {
      version: version,
      now: new Date().toJSON(),
    };
  }
}
