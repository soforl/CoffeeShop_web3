import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { CoffeeService } from './coffee/coffee.service';
import { OrderService } from './order/order.service';
import { RatingService } from './rating/rating.service';
import { UserController } from './user/user.controller';
import { OrderController } from './order/order.controller';
import { RatingController } from './rating/rating.controller';
import { CoffeeController } from './coffee/coffee.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
  controllers: [
    AppController,
    UserController,
    OrderController,
    RatingController,
    CoffeeController,
  ],
  providers: [
    AppService,
    PrismaService,
    UserService,
    CoffeeService,
    OrderService,
    RatingService,
  ],
})
export class AppModule {}
