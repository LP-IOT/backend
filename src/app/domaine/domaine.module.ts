import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomaineService } from './domaine.service';
import { Domaine } from './entities/domaine.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Domaine])],
  providers: [DomaineService],
  exports: [DomaineService],
})
export class DomaineModule {}
