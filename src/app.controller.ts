import { Controller, Get, Post, Put, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} 

  @Get(':id')
  getHello(@Param() parmas): string {
    console.log(parmas);
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.getHello()
  }

  @Put()
  putHello(): string {
    return this.appService.postHello()
  }

}
