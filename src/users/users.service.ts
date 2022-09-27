import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Users} from "./user-model";

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private users: typeof Users)  {}


    async createUser(body){
        return  await this.users.create(body)
    }
    async findAll(){
            return  await this.users.findAll({include:'participants'})
    }

}
