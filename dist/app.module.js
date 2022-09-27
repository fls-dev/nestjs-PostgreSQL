"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/user-model");
const projects_module_1 = require("./projects/projects.module");
const sequelize_1 = require("@nestjs/sequelize");
const projects_model_1 = require("./projects/projects-model");
const user_project_model_1 = require("./users/user-project-model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                dialectOptions: {
                    ssl: {
                        require: false,
                        rejectUnauthorized: false,
                    },
                },
                host: 'ec2-34-247-72-29.eu-west-1.compute.amazonaws.com',
                port: 5432,
                username: 'auvqxfggcijkft',
                password: '9a6aa9f5e9a822fbb69702b6984161272915b71babf15127a6a4da28f8d63199',
                database: 'dbkos2nh8rb4hu',
                models: [user_model_1.Users, projects_model_1.Projects, user_project_model_1.UserProject],
                autoLoadModels: true,
                sync: { force: true }
            }),
            users_module_1.UsersModule,
            projects_module_1.ProjectsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map