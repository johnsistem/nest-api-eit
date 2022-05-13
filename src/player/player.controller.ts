import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Player } from './player.intity';
import { PlayerService } from './player.service';


@Controller('player')
export class PlayerController {

   constructor(private readonly playerService: PlayerService){}

   @Get()
   getAll() {
      return this.playerService.getPlayers();
   }
   
   @Get(':id')
   getPlayer(@Param('id',ParseIntPipe) id):Player {
      return this.playerService.getPlayer(id);
   }
   
   
   
   

}
