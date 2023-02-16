import { Module } from '@nestjs/common';
import { Hero } from 'src/entities/hero.entity';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperPower } from 'src/entities/sp.entity';
import { SuperPowerController } from './sp.controller';
import { SuperPowerService } from './sp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero, SuperPower])]  ,
  controllers: [HeroController,SuperPowerController],
  providers: [HeroService, SuperPowerService],
})
export class HeroModule {}
