import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports:[TypeOrmModule.forFeature([Users]), JwtModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
