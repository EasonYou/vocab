import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RscWaku } from './common/middleware/rcs.waku.js';
import { DevServerWaku } from './common/middleware/devServer.waku.js';
import { ApiModule } from './api/api.module.js';
import { SsrWaku } from './common/middleware/ssr.waku.js';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './api/user/user.module.js';

@Module({
  imports: [ApiModule, RouterModule.register([
    {
      path: 'api',
      module: UserModule
    }
  ])],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SsrWaku, RscWaku, DevServerWaku).exclude('api/(.*)').forRoutes('');
  }
}
