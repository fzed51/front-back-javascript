import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger: Logger = new Logger('main');
  app.enableCors({
    origin: [/http:\/\/localhost(:\d+)?/],
  });
  await app.listen(3000);
  const url = await app.getUrl();
  logger.log(`Listen : ${url}`);
}
bootstrap();
