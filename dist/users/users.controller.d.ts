import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly UserService;
    constructor(UserService: UsersService);
    getUsers(): Promise<import("./user.entity").Users[]>;
    getInfoUser(id: string): Promise<import("./user.entity").Users>;
    createUser(body: any): Promise<{
        status: boolean;
        user: any;
    }>;
}
