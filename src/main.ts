import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication> (AppModule);
  let port = 3000;
  if (process.env.PORT) {
    port = Number(process.env.PORT);
  }
  await app.listen(port);


  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const hbs = require('hbs')
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

}
bootstrap();
