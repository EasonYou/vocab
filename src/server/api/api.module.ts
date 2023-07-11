import { Module } from '@nestjs/common';
import { ApiController } from './api.controller.js';
import { UserModule } from './user/user.module.js';

@Module({
  controllers: [ApiController],
  imports: [UserModule],
})
export class ApiModule {}
