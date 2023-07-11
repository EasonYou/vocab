import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module.js';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [UserModule, RouterModule.register([
    {
      path: 'user',
      module: UserModule
    }
  ])],
})
export class ApiModule {}
