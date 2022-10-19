import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../users/user.entity";
import {JwtModule} from "@nestjs/jwt";
import {SessionControl} from "./session-control.entity";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports:[TypeOrmModule.forFeature([Users, SessionControl]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY_JWT || 'super',
      signOptions: {expiresIn:'7h'}
    }),
    ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[JwtModule]
})
export class AuthModule {}
