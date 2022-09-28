import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Projects} from "./project.entity";
import {Users} from "../users/user.entity";
// import {ProjectUser} from "../entities/project-user.entity";

@Module({
  // imports:[SequelizeModule.forFeature([Projects, Users,UserProject])],
  imports:[TypeOrmModule.forFeature([Projects, Users])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}