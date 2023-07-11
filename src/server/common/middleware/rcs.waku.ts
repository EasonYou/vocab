import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { rsc } from 'waku';

const rscInstance = rsc({
  command: 'dev',
  unstable_prehook: (request: Request) => {
    return { count: Number(request.cookies?.count) || 0 };
  },
  unstable_posthook: (request: Request, response: Response, ctx) => {
    response.cookie('count', String(ctx.count));
  },
});

@Injectable()
export class RscWaku implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    rscInstance(req, res, next);
  }
}
