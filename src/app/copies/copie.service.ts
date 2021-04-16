import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { AdmissionService } from '../admission/admission.service';
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
  async createCopie(c: Copie): Promise<Boolean> {
    try {
      this.admissionService.checkAdmission(c);
      this.copieRepository.save(c);
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }
}
