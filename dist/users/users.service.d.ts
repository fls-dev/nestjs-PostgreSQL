import { Repository } from "typeorm";
import { UserModel } from "./user-model";
export declare class UsersService {
    private UserRepository;
    constructor(UserRepository: Repository<UserModel>);
    createUser(body: any): Promise<any>;
    findAll(): Promise<UserModel[]>;
}
