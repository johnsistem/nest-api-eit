import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';

import { Player } from './player.entity';
import { PlayerService } from './player.service';
import { playerDTO } from './DTO/player.dto';


@Controller('player')
export class PlayerController {

   constructor(private readonly playerService: PlayerService){}

   @Get()
   getAll() {
      return this.playerService.findAll();
   }

   @Get(':id')
   getOne(@Param('id') id:number) {
      return this.playerService.findOne(id);
   }

   @Post('/post')
   createOne(@Body() createplayer:playerDTO ) {
      return this.playerService.createOne(createplayer)
   }

   @Delete(':id')
   deleteOne(@Param('id') id:any ) {
      return this.playerService.deleteOne(id)
   }

  
   
  
   
   
   
   

}
