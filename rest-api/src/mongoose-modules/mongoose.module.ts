import { Module } from '@nestjs/common'
import { UserService } from '@/user/user.service'

const services = [UserService]

@Module({
  providers: services,
  exports: services,
})
export class MongooseModule {}
