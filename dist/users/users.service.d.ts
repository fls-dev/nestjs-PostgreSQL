import { Users } from "./user-model";
export declare class UsersService {
    private users;
    constructor(users: typeof Users);
    createUser(body: any): Promise<Users>;
    findAll(): Promise<Users[]>;
}
