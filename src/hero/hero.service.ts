import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from '../entities/hero.entity';

@Injectable()
export class HeroService {
    constructor(  
        @InjectRepository(Hero)
        private heroRepository: Repository<Hero>,
      ) {}

      createHero(hero: Hero){
        return this.heroRepository.save(hero)
      }

      getAll(){
        return this.heroRepository.find()
      }

      getById(id: number){
        return this.heroRepository.findOneBy({id : id})
      }

      deleteById(id:number){
        return this.heroRepository.delete(id)
      }
      deleteByName(name : string){
        return this.heroRepository.delete(name)
      }
     

     }
