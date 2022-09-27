import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SequelizeModule} from "@nestjs/sequelize";
import {Projects} from "./projects-model";
import {Users} from "../users/user-model";
import {UserProject} from "../users/user-project-model";

@Module({
  imports:[SequelizeModule.forFeature([Projects, Users,UserProject])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}