import { 
  Module, 
  NestModule, 
  MiddlewaresConsumer,
  RequestMethod  }                from '@nestjs/common';
import { AppController }          from './app.controller';
import { UsersModule }            from './users/users.module';

import { FrontendMiddleware }     from './common/middlewares';

@Module({
  imports: [
    UsersModule
  ],
  controllers: [
    AppController
  ],
  components: []
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewaresConsumer): void {

    consumer.apply( FrontendMiddleware).forRoutes(
      {
        path: '/**',
        method: RequestMethod.ALL
      },
    );
  }
}
