import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AtStrategies, RtStrategies } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, AtStrategies, RtStrategies],
  controllers: [AuthController],
})
export class AuthModule {}
