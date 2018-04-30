import * as express         from 'express'
import * as path            from 'path';

import { NestFactory }      from '@nestjs/core';
import { AppModule }        from './app.module';

import {
  HttpExceptionFilter }     from "./common/filters";

async function bootstrap() {

  const app = await NestFactory.create( AppModule);
  app.useGlobalFilters( new HttpExceptionFilter());

  await app.listen( process.env.PORT || 3000);
}
bootstrap();