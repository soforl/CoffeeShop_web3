import { HttpAdapterHost, NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ValidationExceptionFilter } from './validation/validationExceptionFilter';
import { AtGuard } from './auth/guards';
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.use(cookieParser());
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const config = new DocumentBuilder()
    .setTitle('CO&GO')
    .setDescription('lab')
    .addTag('user')
    .addTag('order')
    .addTag('rating')
    .addTag('coffee')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  let port = 5000;

  app.useGlobalFilters(new ValidationExceptionFilter());
  if (process.env.PORT) {
    port = Number(process.env.PORT);
  }
  await app.listen(port);

  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe());

  const hbs = require('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));
}
bootstrap();
