import * as path                    from 'path';

import { 
    Middleware,
    NestMiddleware, 
    ExpressMiddleware }             from '@nestjs/common';

import { API_PREFIX }               from '../const'

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
  '.json'
];

const resolvePath = (file: string) => path.resolve(__dirname + `/../../../dist/${file}`);

@Middleware()
export class FrontendMiddleware implements NestMiddleware {

  resolve(...args: any[]): ExpressMiddleware {

    return (req, res, next) => {

      const { url } = req;

      if ( url.indexOf( API_PREFIX) === 1) {

        next()
      } else if ( allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {

        res.sendFile( resolvePath(url))
      } else {

        res.sendFile( resolvePath('index.html'));
      }
    }
  }
}