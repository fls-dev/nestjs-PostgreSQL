import { Injectable } from '@nestjs/common';
import {Projects} from "./projects-model";
import {InjectModel} from "@nestjs/sequelize";
import {Users} from "../users/user-model";
import {UserProject} from "../users/user-project-model";

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Projects) private projects: typeof Projects,
                @InjectModel(Users) private users: typeof Users,
                @InjectModel(UserProject) private userProject: typeof UserProject) {
    }


    async createProject(body){
        const user = await this.users.findOne({ where: { id: body.createdUserId } });
        const project = await this.projects.create(body);


        return {status:'save', project}
    }
    async getAllProjects() {
        return this.projects.findAll({include:{all:true}})
    }
}
