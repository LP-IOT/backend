import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salle } from './entities/salle.entity';
import { SalleService } from './salle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salle])],
  providers: [SalleService],
  exports: [SalleService],
})
export class SalleModule {}
