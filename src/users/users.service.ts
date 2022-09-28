import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from 'bcryptjs'
import {Users} from "./user.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users)
                public readonly users: Repository<Users>) {
    }



    async findAll() {
        return await this.users.find()
    }

    async createUser(body) {
        const candidate = await this.users.findOne({where:{email:body.email}})
        if(!candidate){
            const hashPassword = await bcrypt.hash(body.password, 9);
            const createdUser = await this.users.save({...body, password:hashPassword});
            return {status: true, user: createdUser}
        }else {
            throw new HttpException('Пользователь с таким Email уже существует', HttpStatus.BAD_REQUEST)
        }
    }
}
