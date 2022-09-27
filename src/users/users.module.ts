import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Users} from "./user-model";
import {Projects} from "../projects/projects-model";
import {UserProject} from "./user-project-model";

@Module({
  imports:[SequelizeModule.forFeature([Users, Projects,UserProject])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
