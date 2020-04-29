import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/v1/api')

  const config = app.get(ConfigService)

  await app.listen(config.get<number>('PORT'), () => {
    console.log(`Server started at port: ${config.get('PORT')} 🚀🚀🚀`)
  })
}
bootstrap()
