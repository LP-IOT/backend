import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdmissionModule } from '../admission/admission.module';
import { BarreModule } from '../barre/barre.module';
import { DomaineModule } from '../domaine/domaine.module';
import { EpreuveModule } from '../epreuve/epreuve.module';
import { EtudiantModule } from '../etudiant/etudiant.module';
import { LotModule } from '../lot/lot.module';
import { CopieService } from './copie.service';
import { Copie } from './entities/copie.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Copie]), EtudiantModule, EpreuveModule, LotModule, DomaineModule, AdmissionModule, BarreModule],
  providers: [CopieService],
  exports: [CopieService],
})
export class CopieModule {}
