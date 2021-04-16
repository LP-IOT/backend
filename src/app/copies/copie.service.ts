import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { DomaineService } from '../domaine/domaine.service';
import { EpreuveService } from '../epreuve/epreuve.service';
import { EtudiantService } from '../etudiant/etudiant.service';
import { LotService } from '../lot/lot.service';
import { Copie } from './entities/copie.entity';


@Injectable()
export class CopieService {
  constructor(
    @InjectRepository(Copie)
    private copieRepository: Repository<Copie>,
    @Inject(EtudiantService)
    private readonly etudiantService,
    @Inject(DomaineService)
    private readonly domaineService,
    @Inject(LotService)
    private readonly lotService,
    @Inject(EpreuveService)
    private readonly epreuveService
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
      copie.etudiant = await this.etudiantService.findOne(idEtu);
      copie.domaine = await this.domaineService.findOne(idDomaine);
      copie.lot = await this.lotService.findOne(idLot);
      copie.epreuve = await this.epreuveService.findOne(idEpreuve);
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }
}
