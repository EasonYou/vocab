import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('')
  getName(): string {
    return 'name'
  }

  @Get('getGender')
  getGender(): string{
  return 'man'
}
}
