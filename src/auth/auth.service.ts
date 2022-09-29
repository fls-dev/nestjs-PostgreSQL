import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../users/user.entity";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Users)
                public readonly users: Repository<Users>,
                private JwtService: JwtService) {}


    async login (body){
        const findUser = await this.users.findOne({
            where: {email: body.username}
        });
        if(findUser){
            const passwordCompare = await bcrypt.compare(body.password, findUser.password )
            if(passwordCompare){
                const payload = {id:findUser.id}
                return{
                    status: true,
                    user: findUser,
                    token: this.JwtService.sign(payload,{expiresIn:'24h'})
                }
            }else throw new UnauthorizedException({status: false, message:'no correct password'})
        }else {
            throw new UnauthorizedException({status: false, message:'no correct user'})
        }
    }
}
