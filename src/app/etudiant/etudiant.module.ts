import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtudiantService } from './etudiant.service';
import { Etudiant } from './entities/etudiant.entity';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [CsvModule, TypeOrmModule.forFeature([Etudiant])],
  providers: [EtudiantService],
  exports: [EtudiantService],
})
export class EtudiantModule {}
