import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {

  /*  private players: Player[] = [

      {
         id: 1,
         name: "Pele",
         posicion: "delantero",
         equipo: "santos",
         edad: 24,
      },
      {

         id: 2,
         name: "Maradona  ",
         posicion: "delantero",
         equipo: "Boca",
         edad: 22,
      }

   ] */

   constructor(
      @InjectRepository(Player)
      private playerRepository: Repository<Player>,
   ) { }



   findAll(): Promise<Player[]> {
      return this.playerRepository.find();
   }

}
