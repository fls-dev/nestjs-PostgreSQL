import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserModel} from "./user-model";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserModel) private UserRepository: Repository<UserModel>)  {}


    async createUser(body){
        return  await this.UserRepository.save(body)
    }
    async findAll(){
            return  await this.UserRepository.find()
    }

}
