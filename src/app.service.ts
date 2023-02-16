import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './entities/hero.entity';

@Injectable()
export class AppService {

  constructor(  
  ) {}

  

  getHello(): string {
    return 'Hello World!';
  }
}
