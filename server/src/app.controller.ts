import * as path                  from 'path';

import { Get, Controller, Res }   from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  angular( @Res() response): void {

    response.sendFile( path.resolve(__dirname + '/../dist/index.html'))
  }

}
