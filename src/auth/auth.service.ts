import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../users/user.entity";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {SessionControl} from "./session-control.entity";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Users)
                public readonly users: Repository<Users>,
                @InjectRepository(SessionControl)
                public readonly Session: Repository<SessionControl>,
                private JwtService: JwtService) {}


    async login (body, browser){
        const findUser = await this.users.findOne({
            where: {email: body.username}
        });

        if(findUser){
            const passwordCompare = await bcrypt.compare(body.password, findUser.password )
            if(passwordCompare){

                const payload = {id:findUser.id}
                const payloadRefresh = {id:findUser.id, browser, now: Date.now()}

                const accessToken = this.JwtService.sign(payload,{expiresIn:'1h'});
                const refreshToken = this.JwtService.sign(payloadRefresh,{expiresIn:'60d', secret: process.env.REFRESH_KEY_JWT})

                let expiresIn = new Date();
                expiresIn.setMonth(expiresIn.getMonth() + 1);

                const saveSession = await this.Session.save({
                   userId: findUser.id,
                    refreshToken,
                    ua: browser,
                    expiresIn:expiresIn
                });

                return{
                    status: true,
                    user: findUser,
                    accessToken,
                    refreshToken
                }
            }else throw new UnauthorizedException({status: false, message:'no correct password'})
        }else {
            throw new UnauthorizedException({status: false, message:'no correct user'})
        }
    }

    async refreshToken(refreshOld, browser){
        try {
            const refreshDecode = await this.JwtService.verify(refreshOld, {secret:process.env.REFRESH_KEY_JWT})
            // console.log(refreshDecode)
            // return accessOld;
            const userId = refreshDecode.id;
            const count = await this.Session.countBy({userId: userId})
            const session = await this.Session.findOneBy({refreshToken:refreshOld, userId: userId});
            // console.log(count)
            if(session) {
                // return count;
                const payload = {id: userId}
                const payloadRefresh = {id: userId, browser, now: Date.now()}

                const accessToken = this.JwtService.sign(payload, {expiresIn: '1h'});
                const refreshToken = this.JwtService.sign(payloadRefresh, {
                    expiresIn: '60d',
                    secret: process.env.REFRESH_KEY_JWT
                })

                let expiresIn = new Date();
                expiresIn.setMonth(expiresIn.getMonth() + 1);

                if(count<2){
                    const updateSession = await this.Session.save(
                        {refreshToken: refreshToken, expiresIn: expiresIn, id: session.id}
                    )
                }else {
                    const deleteSessions = await this.Session.delete({userId: userId})
                    const saveSession = await this.Session.save(
                        {
                            userId: userId,
                            refreshToken,
                            ua: browser,
                            expiresIn:expiresIn
                        }
                    )
                }
                return{
                    status: true,
                    accessToken,
                    refreshToken
                }
            }else {
                return{
                    status: false,
                    refreshToken:false
                }
            }


            // return {refreshDecode,session}

        }catch (err){
            return {status: false, err}
        }
    }
}
