import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArrayContains, In, Repository} from "typeorm";
import {Projects} from "./project.entity";
import {Users} from "../users/user.entity";

@Injectable()
export class ProjectsService {
    constructor(@InjectRepository(Projects)
                public readonly projects: Repository<Projects>,
                @InjectRepository(Users)
                public readonly user: Repository<Users>

    ) {}


    async createProject(body){
        const project = await this.projects.save(body);
        return {status:'save', project}
    }


    async userProjects(id) {
        let projects = await this.projects.find({where: {id: id}, relations: {createdUserId: true}, cache: true})
        for (const project of projects) {
            let usersArray = []
            let us = await this.user.findOneBy({
                // @ts-ignore
                id: In(project.users)
            })
            usersArray.push(us)
            project.users = usersArray
        }
        return projects
    }
}
