import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDbConnectionOptions, runDbMigrations } from './shared/utils'
async function bootstrap() {
  
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create(AppModule.forRoot(await
    getDbConnectionOptions(process.env.NODE_ENV)),
    );

/**
* Run DB migrations
*/
  await runDbMigrations();
  await app.listen(3000);
}
bootstrap();
