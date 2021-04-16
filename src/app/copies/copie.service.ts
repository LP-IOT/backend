import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { AdmissionService } from '../admission/admission.service';
import { Barre } from '../barre/entities/barre.entity';
import { DomaineService } from '../domaine/domaine.service';
import { Domaine } from '../domaine/entities/domaine.entity';
import { Epreuve } from '../epreuve/entities/epreuve.entity';
import { EpreuveService } from '../epreuve/epreuve.service';
import { Etudiant } from '../etudiant/entities/etudiant.entity';
import { EtudiantService } from '../etudiant/etudiant.service';
import { Lot } from '../lot/entities/lot.entity';
import { LotService } from '../lot/lot.service';
import { Copie } from './entities/copie.entity';


@Injectable()
export class CopieService {
  constructor(
    @InjectRepository(Copie)
    private copieRepository: Repository<Copie>,
    @Inject(EtudiantService)
    private readonly etudiantService: EtudiantService,
    @Inject(DomaineService)
    private readonly domaineService: DomaineService,
    @Inject(LotService)
    private readonly lotService: LotService,
    @Inject(EpreuveService)
    private readonly epreuveService: EpreuveService,
    @Inject(AdmissionService)
    private readonly admissionService: AdmissionService
  ) {}

  async findOne(id: number) {
    return await this.copieRepository.findOne({ id });
  }
  async findAll() {
    return await this.copieRepository.find();
  }
  async createCopie(note: number, idEtu: number, idDomaine: number, idLot: number, idEpreuve: number): Promise<Boolean> {
    try {
      var copie = new Copie();
      copie.note = note;
      var e: Etudiant = await this.etudiantService.findOneByNumEtu(idEtu);
      var etuVag: Etudiant = await this.etudiantService.findEtudVag(e.id);
      var d: Domaine = await this.domaineService.findOne(idDomaine);
      var lot: Lot = await this.lotService.findOne(idLot);
      var epreuve: Epreuve = await this.epreuveService.findOne(idEpreuve);
      var epreuveBarre: Epreuve = await this.epreuveService.findBarre(idEpreuve);

      copie.etudiant = e;
      copie.domaine = d;
      copie.lot = lot;
      copie.epreuve = epreuve;
      this.copieRepository.save(copie);
      this.admissionService.checkAdmission(copie, e, etuVag, d.id, epreuve, epreuveBarre);
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }
}
