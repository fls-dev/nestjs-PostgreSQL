import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {Users} from "./users/user-model";
import { ProjectsModule } from './projects/projects.module';
import { SequelizeModule } from '@nestjs/sequelize';
import {Projects} from "./projects/projects-model";
import {UserProject} from "./users/user-project-model";

@Module({
  imports: [
    SequelizeModule.forRoot({
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
      models: [Users, Projects,UserProject],
      autoLoadModels: true,
      sync: {force: true}
    }),
    UsersModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//  TypeOrmModule.forRoot({
//       url:"postgres://auvqxfggcijkft:9a6aa9f5e9a822fbb69702b6984161272915b71babf15127a6a4da28f8d63199@ec2-34-247-72-29.eu-west-1.compute.amazonaws.com:5432/dbkos2nh8rb4hu",
//       type: 'postgres',
//       host: 'ec2-34-247-72-29.eu-west-1.compute.amazonaws.com',
//       port: 5432,
//       username: 'auvqxfggcijkft',
//       password: '9a6aa9f5e9a822fbb69702b6984161272915b71babf15127a6a4da28f8d63199',
//       database: 'dbkos2nh8rb4hu',
//       entities: [__dirname + "/../**/*.entity{.ts,.js}"],
//       synchronize: true,
//       logging: false,
//       autoLoadEntities: true,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     }),