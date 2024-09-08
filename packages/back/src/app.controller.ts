import { Controller, Get, Logger } from '@nestjs/common';
import { version } from '../package.json';

@Controller()
export class AppController {
  private logger: Logger = new Logger(AppController.name);
  @Get('ping')
  ping() {
    this.logger.verbose('ping');
    return {
      version: version,
      now: new Date().toJSON(),
    };
  }
}
