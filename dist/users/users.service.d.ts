import { Repository } from "typeorm";
import { Users } from "./user.entity";
export declare class UsersService {
    readonly users: Repository<Users>;
    constructor(users: Repository<Users>);
    findAll(): Promise<Users[]>;
    createUser(body: any): Promise<{
        status: boolean;
        user: any;
    }>;
}
