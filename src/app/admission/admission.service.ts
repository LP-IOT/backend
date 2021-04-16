import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BarreService } from '../barre/barre.service';
import { Copie } from '../copies/entities/copie.entity';
import { EpreuveService } from '../epreuve/epreuve.service';
import { VagueService } from '../vague/vague.service';
import { Admission } from './entities/admission.entity';



@Injectable()
export class AdmissionService {
  constructor(
    @InjectRepository(Admission)
    private admissionRepository: Repository<Admission>
  ) {}

  async findOne(id: number) {
    return await this.admissionRepository.findOne({ id });
  }
  async findAll() {
    return await this.admissionRepository.find();
  }

  async checkAdmission(c: Copie): Promise<Boolean> {
    try {
      var e = c.epreuve.barre;
      var a = new Admission();
      a.domaines = c.domaine;
      a.resultatQuantitatif = c.note;
      a.etudiants = c.etudiant;
      a.dateCapitalisation = c.etudiant.vague.finVague;
      
  
      if(c.note >= e.seuil) {
          a.resultatQualitatif = "ADM";
      }
      else if(c.note < e.seuil && c.note >= 2.5) {
          a.resultatQualitatif = "MOY";
      }
      else if(c.note < 2.5) {
          a.resultatQualitatif = "AJ";
      }
      this.admissionRepository.save(a);
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }
}
