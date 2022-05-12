import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('dos')
  getDos(): string {
    return "HOLA DOSS2222";
  }
  @Get('product/:id')
  getProduct(): string {
    return `Mi product is ${id}`;
  }
}
