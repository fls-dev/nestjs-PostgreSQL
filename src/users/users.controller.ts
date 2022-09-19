import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";


@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService) {
    }

    @Get()
    async getUsers() {
        return await this.UserService.findAll();
    }

    @Post('/create')
    createUser(@Body() body){
        return this.UserService.createUser(body)
    }



}
