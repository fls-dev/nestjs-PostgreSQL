import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";


@Controller('users')
// @UseGuards(JwtAuthGuard)
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
