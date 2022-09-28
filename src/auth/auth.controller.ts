import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly auth: AuthService) {}

    @Post('/login')
    async login(@Body() body){
        return await this.auth.login(body)
    }

}