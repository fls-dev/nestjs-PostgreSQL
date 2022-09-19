import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany,
    UpdateDateColumn,
    CreateDateColumn
} from 'typeorm';


@Entity({ name: 'users' })
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({default: 'USER'})
    role: string;

    @Column({
        type: 'jsonb'
    })
    details: Record<string, any>;

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;

}