

// @Table({tableName: 'projects'})
// export class Projects extends Model {
//
//     @ForeignKey(() => Users)
//     @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
//     id: number;
//
//     @ForeignKey(() => Users)
//     @Column({type: DataType.INTEGER})
//     createdUserId: number;
//
//     @Column({type: DataType.STRING, allowNull:false})
//     name: string;
//
//     @Column({type: DataType.TEXT, defaultValue: null})
//     description: string;
//
//     @Column({type: DataType.JSONB, defaultValue: null})
//     deadline:  Record<string, any>;
//
//     @Column({type: DataType.JSONB, defaultValue: null})
//     files: Record<string, any>;
//
//     @BelongsTo(() => Users)
//     users: Users[]
// }

