import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BarreService } from '../barre/barre.service';
import { Barre } from '../barre/entities/barre.entity';
import { Copie } from '../copies/entities/copie.entity';
import { DomaineService } from '../domaine/domaine.service';
import { Domaine } from '../domaine/entities/domaine.entity';
import { Epreuve } from '../epreuve/entities/epreuve.entity';
import { EpreuveService } from '../epreuve/epreuve.service';
import { Etudiant } from '../etudiant/entities/etudiant.entity';
import { EtudiantService } from '../etudiant/etudiant.service';
import { Lot } from '../lot/entities/lot.entity';
import { VagueService } from '../vague/vague.service';
import { Admission } from './entities/admission.entity';



@Injectable()
export class AdmissionService {
  constructor(
    @InjectRepository(Admission)
    private admissionRepository: Repository<Admission>,
    @Inject(DomaineService)
    private readonly domaineService: DomaineService,
    @Inject(EpreuveService)
    private readonly epreuveService: EpreuveService
  ) {}

  async findOne(id: number) {
    return await this.admissionRepository.findOne({ id });
  }
  async findAll() {
    return await this.admissionRepository.find();
  }

  async checkAdmission(c: Copie, idEtu: Etudiant, etuVague: Etudiant, idDomaine: number, epreuve: Epreuve, epreuveBarre: Epreuve): Promise<Boolean> {
    try {
      var a = new Admission();

    

      var e: Etudiant = idEtu;
      var d: Domaine = await this.domaineService.findOne(idDomaine);

      var barre: Barre = epreuveBarre.barre;
      a.resultatQuantitatif = c.note;

      Logger.error(barre.id);
      Logger.error(barre.seuil);
      Logger.log(c.note);
      a.domaines =  d;
      Logger.log(d.id);
      a.etudiants = e;
      Logger.log(e.idetudiant);
      a.dateCapitalisation = etuVague.vague.finVague;
      Logger.log(e)


      if(c.note >= barre.seuil) {
          a.resultatQualitatif = "ADM";
      }
      else if(c.note < barre.seuil && c.note >= 2.5) {
          a.resultatQualitatif = "MOY";
      }
      else {
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
function forwardRed(): any {
  throw new Error('Function not implemented.');
}

