import {Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {Users} from "./user-model";
import {Projects} from "../projects/projects-model";

@Table({tableName: 'userProject', createdAt: false, updatedAt: false})
export class UserProject extends Model {

    // @HasMany(() => Users)
    // user: Users[]
    //
    // @HasMany(() => Projects)
    // project: Projects[]
}