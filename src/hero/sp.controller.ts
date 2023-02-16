import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuperPowerService } from './sp.service';

@Controller('sp')
export class SuperPowerController {

    constructor(private readonly heroService: SuperPowerService){}

  @Post()
  createHero(@Body()hero: any){
    return this.heroService.createsuperPower(hero)
  }

  @Get()
  getAllHeroes(){
    return this.heroService.getAll()
  }

  @Get(':id')
  getById(@Param('id')id: any){
    return this.heroService.getById(parseInt(id))
  }
  @Delete(':id')
  deleteById(@Param('id')id :any){
    return this.heroService.deleteById(id)
  }
 
}