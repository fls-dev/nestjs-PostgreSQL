import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly UserService;
    constructor(UserService: UsersService);
    getUsers(): Promise<import("./user-model").UserModel[]>;
    createUser(body: any): Promise<any>;
}
