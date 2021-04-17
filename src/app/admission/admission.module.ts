import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomaineModule } from '../domaine/domaine.module';
import { EpreuveModule } from '../epreuve/epreuve.module';
import { EtudiantModule } from '../etudiant/etudiant.module';
import { EtudiantService } from '../etudiant/etudiant.service';
import { AdmissionService } from './admission.service';
import { Admission } from './entities/admission.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Admission]),
     DomaineModule, 
     EpreuveModule,
    EtudiantModule],
  providers: [AdmissionService],
  exports: [AdmissionService],
})
export class AdmissionModule {}
