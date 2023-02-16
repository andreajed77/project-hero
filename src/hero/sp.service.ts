import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuperPower } from '../entities/sp.entity';

@Injectable()
export class SuperPowerService {
    constructor(  
        @InjectRepository(SuperPower)
        private superPowerRepository: Repository<SuperPower>,
      ) {}

      createsuperPower(superPower: SuperPower){
        return this.superPowerRepository.save(superPower)
      }

      getAll(){
        return this.superPowerRepository.find()
      }

      getById(id: number){
        return this.superPowerRepository.findOneBy({id : id})
      }

      deleteById(id:number){
        return this.superPowerRepository.delete(id)
      }
      deleteByName(name : string){
        return this.superPowerRepository.delete(name)
      }
     }
