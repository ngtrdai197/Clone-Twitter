import { Injectable } from '@nestjs/common'

@Injectable()
export class ActionUserService {
  async getSth() {
    return 'hello there ...'
  }
}
