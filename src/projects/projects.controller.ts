import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProjectsService} from "./projects.service";

@Controller('projects')
export class ProjectsController {
    constructor(private readonly ProjectsService: ProjectsService) {
    }

    @Get()
    async getProjects() {
        return await this.ProjectsService.getAllProjects();
    }

    @Post('/create')
    createUser(@Body() body){
        return this.ProjectsService.createProject(body)
    }
}
