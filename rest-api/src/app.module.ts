import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`,
      isGlobal: true,
    }),
    UserModule,
    ActionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
