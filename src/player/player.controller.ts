import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';


@Controller('player')
export class PlayerController {

   constructor(private readonly playerService: PlayerService){}

   @Get()
   getAll() {
      return this.playerService.findAll();
   }
   
  
   
   
   
   

}
