import { Controller, Get } from '@nestjs/common'

@Controller('user')
export class UserController {
  @Get('')
  async hello(): Promise<string> {
    return 'hello'
  }
}
