import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { CoffeeService } from './coffee/coffee.service';
import { OrderService } from './order/order.service';
import { RatingService } from './rating/rating.service';
import { OrderController } from './order/order.controller';
import { RatingController } from './rating/rating.controller';
import { CoffeeController } from './coffee/coffee.controller';
// import { TokenService } from './token/token.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
// import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './auth/guards';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [
    AppController,
    OrderController,
    RatingController,
    CoffeeController,
    AuthController,
  ],
  providers: [
    AppService,
    PrismaService,
    CoffeeService,
    OrderService,
    RatingService,
    AuthService,
    JwtService,
  ],
})
export class AppModule {}
