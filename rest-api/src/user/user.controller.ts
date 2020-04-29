import { Controller, Get } from '@nestjs/common'
import { ActionUserService } from '@/actions/user/action.service'

@Controller('user')
export class UserController {
  constructor(private readonly actionUserService: ActionUserService) {}
  @Get('')
  async hello(): Promise<string> {
    return this.actionUserService.getSth()
  }
}
