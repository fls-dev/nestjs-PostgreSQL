import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {timestamp} from "rxjs";

@Entity('session-control')
export class SessionControl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    refreshToken: string;

    @Column()
    ua: string;

    @Column({type:"timestamp", nullable: true})
    expiresIn: Date;

}