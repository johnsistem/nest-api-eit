import { Controller, Get,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  
  @Get('dos')
  getDos(): string {
    return 'HOLA DOSS2222';
  }
  @Get('product/:id')
  getProduct(@Param() params): string {
    return `Mi product is ${params.id}`;
  }
  @Get('buscar/:query/:page/')
  getBuscar(@Param('query') query, @Param('page') page): string {
    return `Mi product is ${query} -page:${page}`;
  }
}
