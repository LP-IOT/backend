import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtudiantService } from './etudiant.service';
import { Etudiant } from './entities/etudiant.entity';
import { CsvModule } from 'nest-csv-parser';
import { EpreuveModule } from '../epreuve/epreuve.module';
import { GroupeModule } from '../groupe/group.module';
import { UfrModule } from '../ufr/ufr.module';
import { VagueModule } from '../vague/vague.module';

@Module({
  imports: [CsvModule, TypeOrmModule.forFeature([Etudiant]), EpreuveModule, GroupeModule, UfrModule, VagueModule],
  providers: [EtudiantService],
  exports: [EtudiantService],
})
export class EtudiantModule {}
