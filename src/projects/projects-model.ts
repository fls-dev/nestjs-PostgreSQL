import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Users} from "../users/user-model";
import {UserProject} from "../users/user-project-model";
import {Sequelize} from "sequelize";

@Table({tableName: 'projects'})
export class Projects extends Model {

    @ForeignKey(() => Users)
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number;

    @ForeignKey(() => Users)
    @Column({type: DataType.INTEGER})
    createdUserId: number;

    @Column({type: DataType.STRING, allowNull:false})
    name: string;

    @Column({type: DataType.TEXT, defaultValue: null})
    description: string;

    @Column({type: DataType.JSONB, defaultValue: null})
    deadline:  Record<string, any>;

    @Column({type: DataType.JSONB, defaultValue: null})
    files: Record<string, any>;

    @BelongsTo(() => Users)
    users: Users[]


    // @BelongsToMany(() => Users, () => UserProject)
    // user: Users[]
}

