import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('project-user')
export class ProjectUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    public userId!: number

    @Column()
    public projectId!: number
}