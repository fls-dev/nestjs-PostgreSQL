import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly auth: AuthService) {}

    @HttpCode(200)
    @Post('/login')
    async login(@Body() body){
        return await this.auth.login(body)
    }

}
