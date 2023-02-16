import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
  import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {

    constructor(private readonly heroService: HeroService){}

  @Post()
  createHero(@Body()hero: any){
    return this.heroService.createHero(hero)
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

