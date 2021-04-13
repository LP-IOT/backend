import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Epreuve } from './entities/epreuve.entity';
import { EpreuveService } from './epreuve.service';

@Module({
  imports: [TypeOrmModule.forFeature([Epreuve])],
  providers: [EpreuveService],
  exports: [EpreuveService],
})
export class EpreuveModule {}
