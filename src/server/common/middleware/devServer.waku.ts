import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { devServer } from 'waku';

const server = devServer();
@Injectable()
export class DevServerWaku implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    server(req, res, next);
  }
}
