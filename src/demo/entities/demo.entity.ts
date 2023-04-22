import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Demo {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({type: 'varchar', nullable: false,length: 200 })
    name: string

    @Column({type: 'int'})
    age: number

    @Column()
    like: string

    @Column({type: 'timestamp', default: () => 'NOW()'})
    createTime: Date

    @Column({type: 'timestamp', default: () => 'NOW()'})
    updateTime: Date

    @Column({type:'enum', enum: [1,0], default: 1})
    sex: number
}
