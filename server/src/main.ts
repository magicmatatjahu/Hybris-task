import * as express         from 'express'
import * as path            from 'path';

import { NestFactory }      from '@nestjs/core';
import { AppModule }        from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const distDir = await path.join(__dirname + "/../dist");
  await app.use( express.static( distDir));

  console.log(distDir);
  console.log(__dirname);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();