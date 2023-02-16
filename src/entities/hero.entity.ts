import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm';
import { SuperPower } from './sp.entity';


@Entity('hero')
export class Hero {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(()=>SuperPower,(superpower: SuperPower)=>superpower.id,{eager:true,cascade:true})
    @JoinTable({name: 'heroes_super_powers'})
    superPowers: SuperPower[]

}
