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
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const projects_module_1 = require("./projects/projects.module");
const user_entity_1 = require("./users/user.entity");
const project_entity_1 = require("./projects/project.entity");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const session_control_entity_1 = require("./auth/session-control.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                url: "postgres://evyevihhsiroyx:a2bd3f47d2c1326721aeb9a41775efb9468aa70e3a609a293a8fb331a1203f9d@ec2-54-75-102-122.eu-west-1.compute.amazonaws.com:5432/d7q90pks25m0i6",
                type: 'postgres',
                host: 'ec2-54-75-102-122.eu-west-1.compute.amazonaws.com',
                port: 5432,
                username: 'evyevihhsiroyx',
                password: 'a2bd3f47d2c1326721aeb9a41775efb9468aa70e3a609a293a8fb331a1203f9d',
                database: 'd7q90pks25m0i6',
                entities: [
                    user_entity_1.Users, project_entity_1.Projects, session_control_entity_1.SessionControl
                ],
                synchronize: true,
                logging: false,
                autoLoadEntities: true,
                ssl: {
                    rejectUnauthorized: false
                },
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: '.secret.env',
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'static'),
            }),
            users_module_1.UsersModule,
            projects_module_1.ProjectsModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map