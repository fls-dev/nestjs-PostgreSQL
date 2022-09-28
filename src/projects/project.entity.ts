import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import {Users} from "../users/user.entity";
// import {ProjectUser} from "../entities/project-user.entity";



@Entity('Projects')
export class Projects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdUserId: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    deadline: Record<string, any>;

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    files: Record<string, any>;

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    users: Record<string, any>;
}