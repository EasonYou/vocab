import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service.js';

@Controller('api')
export class ApiController {
  @Get('hello')
  getHello(): string {
    console.log('313123213');
    return '312312';
  }
}
