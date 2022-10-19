import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { SequelizeModule } from '@nestjs/sequelize';
import {Users} from "./users/user.entity";
import {Projects} from "./projects/project.entity";
import { AuthModule } from './auth/auth.module';
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import {SessionControl} from "./auth/session-control.entity";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      url:"postgres://evyevihhsiroyx:a2bd3f47d2c1326721aeb9a41775efb9468aa70e3a609a293a8fb331a1203f9d@ec2-54-75-102-122.eu-west-1.compute.amazonaws.com:5432/d7q90pks25m0i6",
      type: 'postgres',
      host: 'ec2-54-75-102-122.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'evyevihhsiroyx',
      password: 'a2bd3f47d2c1326721aeb9a41775efb9468aa70e3a609a293a8fb331a1203f9d',
      database: 'd7q90pks25m0i6',
      entities: [
        Users, Projects,SessionControl
      ],
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.secret.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    UsersModule,
    ProjectsModule,
    AuthModule,
    JwtModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

 // TypeOrmModule.forRoot({
 //      url:"postgres://auvqxfggcijkft:9a6aa9f5e9a822fbb69702b6984161272915b71babf15127a6a4da28f8d63199@ec2-34-247-72-29.eu-west-1.compute.amazonaws.com:5432/dbkos2nh8rb4hu",
 //      type: 'postgres',
 //      host: 'ec2-34-247-72-29.eu-west-1.compute.amazonaws.com',
 //      port: 5432,
 //      username: 'auvqxfggcijkft',
 //      password: '9a6aa9f5e9a822fbb69702b6984161272915b71babf15127a6a4da28f8d63199',
 //      database: 'dbkos2nh8rb4hu',
 //      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
 //      synchronize: true,
 //      logging: false,
 //      autoLoadEntities: true,
 //      ssl: {
 //        rejectUnauthorized: false
 //      },
 //    }),

// se
// SequelizeModule.forRoot({
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: false,
//       rejectUnauthorized: false,
//     },
//   },
//   host: 'ec2-34-247-72-29.eu-west-1.compute.amazonaws.com',
//   port: 5432,
//   username: 'auvqxfggcijkft',
//   password: '9a6aa9f5e9a822fbb69702b6984161272915b71babf15127a6a4da28f8d63199',
//   database: 'dbkos2nh8rb4hu',
//   models: [Users, Projects,UserProject],
//   autoLoadModels: true,
//   sync: {force: true}
// }),