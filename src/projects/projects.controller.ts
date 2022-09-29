import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProjectsService} from "./projects.service";

@Controller('projects')
export class ProjectsController {
    constructor(private readonly ProjectsService: ProjectsService) {
    }

    @Get('/user/:id')
    async getUserProjects(@Param('id') id: string) {
        return await this.ProjectsService.userProjects(id);
    }

    @Post('/create')
    createUser(@Body() body){
        return this.ProjectsService.createProject(body)
    }
}
