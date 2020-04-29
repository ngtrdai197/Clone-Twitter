import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { ActionsModule } from '@/actions/actions.module'

@Module({
  imports: [ActionsModule],
  controllers: [UserController],
})
export class UserModule {}
