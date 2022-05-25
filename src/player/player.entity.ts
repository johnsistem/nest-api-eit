import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   posicion: string;

   @Column()
   equipo: string;

   @Column()
   edad: string;
   @Column()      
   juegos: number;
}



