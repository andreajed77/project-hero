import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('superpower')
export class SuperPower {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    strenght: number;
}