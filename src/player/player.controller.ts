import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { Player } from './player.entity';
import { PlayerService } from './player.service';
import { playerDTO } from './DTO/player.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('player')
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
   
   @Put(':id')
   updateOne(@Param('id') id: number, @Body() updateplayer:playerDTO) {
      return this.playerService.update(id,updateplayer);
   }
  
   
  
   
   
   
   

}
