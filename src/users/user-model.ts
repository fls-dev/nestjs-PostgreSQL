import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {UserProject} from "./user-project-model";
import {Projects} from "../projects/projects-model";

@Table({tableName: 'users'})
export class Users extends Model {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string;

    @Column({type: DataType.STRING})
    password: string;

    @Column({type: DataType.STRING})
    role: string;

    @Column({type: DataType.JSONB})
    details: Record<string, any>;

    @HasMany(() => Projects)
    projects: Projects[]

    // @BelongsToMany(()=> Projects,()=>UserProject)
    // projects: Projects[]

}

