import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ssr } from 'waku';

const middleware = ssr({ command: 'dev' });
@Injectable()
export class SsrWaku implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('ssr >>>');
    // next();
    middleware(req, res, next);
  }
}
