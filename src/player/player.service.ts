import { Injectable } from '@nestjs/common';
import { Player } from './player.intity';

@Injectable()
export class PlayerService {

   private players: Player[] = [

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

   ]

   getPlayers() {
      return this.players;
   }
   getPlayer(id) {
      return this.players.find(player => player.id == id)
   }

}
