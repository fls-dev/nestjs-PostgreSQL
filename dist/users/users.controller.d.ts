import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly UserService;
    constructor(UserService: UsersService);
    getUsers(): Promise<import("./user-model").Users[]>;
    createUser(body: any): Promise<import("./user-model").Users>;
}
