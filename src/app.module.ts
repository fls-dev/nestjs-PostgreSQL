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
      type: 'postgres',
      host: 'serwer2068433.home.pl',
      port: 5432,
      username: '33667244_postgre_nestjs',
      password: 'ElGhh6p4IUqwx_M8',
      database: '33667244_postgre_nestjs',
      entities: [
        Users, Projects,SessionControl
      ],
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
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


//TypeOrmModule.forRoot({
//       url:"postgres://evyevihhsiroyx:a2bd3f47d2c1326721aeb9a41775efb9468aa70e3a609a293a8fb331a1203f9d@ec2-54-75-102-122.eu-west-1.compute.amazonaws.com:5432/d7q90pks25m0i6",
//       type: 'postgres',
//       host: 'ec2-54-75-102-122.eu-west-1.compute.amazonaws.com',
//       port: 5432,
//       username: 'evyevihhsiroyx',
//       password: 'a2bd3f47d2c1326721aeb9a41775efb9468aa70e3a609a293a8fb331a1203f9d',
//       database: 'd7q90pks25m0i6',
//       entities: [
//         Users, Projects,SessionControl
//       ],
//       synchronize: true,
//       logging: false,
//       autoLoadEntities: true,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     }),