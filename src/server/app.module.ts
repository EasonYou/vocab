import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RscWaku } from './common/middleware/rcs.waku.js';
import { DevServerWaku } from './common/middleware/devServer.waku.js';
import { ApiModule } from './api/api.module.js';
import { SsrWaku } from './common/middleware/ssr.waku.js';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SsrWaku).forRoutes('');
    consumer.apply(RscWaku).forRoutes('');
    consumer.apply(DevServerWaku).forRoutes('');
  }
}
