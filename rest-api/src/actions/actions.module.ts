import { Module } from '@nestjs/common'
import { MongooseModule } from '@/mongoose-modules/mongoose.module'
import { ActionUserService } from './user/action.service'

const actionServices = [ActionUserService]

@Module({
  imports: [MongooseModule],
  providers: actionServices,
  exports: actionServices,
})
export class ActionsModule {}
