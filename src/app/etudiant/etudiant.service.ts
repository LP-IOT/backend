import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Etudiant } from './entities/etudiant.entity';
import { CsvParser } from 'nest-csv-parser';
import { EpreuveService } from '../epreuve/epreuve.service';
import { UfrService } from '../ufr/ufr.service';
import { VagueService } from '../vague/vague.service';
import { GroupeService } from '../groupe/group.service';


@Injectable()
export class EtudiantService {
  constructor(
    @InjectRepository(Etudiant)
    private etudiantRepository: Repository<Etudiant>,
    private readonly csvParser: CsvParser,
    @Inject(EpreuveService)
    private readonly epreuveService: EpreuveService,
    @Inject(UfrService)
    private readonly ufrService: UfrService,
    @Inject(VagueService)
    private readonly vagueService: VagueService,
    @Inject(GroupeService)
    private readonly groupeService: GroupeService
  ) {}

  async findOne(id: number) {
    return await this.etudiantRepository.findOne({ id });
  }

  async findAll() {
    return await this.etudiantRepository.find();
  }

  async importEtudiant(file: Express.Multer.File): Promise<Boolean> {
    try {
      var streamifier = require('streamifier/lib');
      const stream = streamifier.createReadStream(file.buffer);
      var entities = await this.csvParser.parse(stream, Etudiant, null, null, { strict: true, separator: ',' });
      this.etudiantRepository.save(entities.list);
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }

  async updateEtudiant(idEtu: number, idUfr: number, idEpreuve: number, idVague: number, idGroupe: number): Promise<Boolean> {
    try {
      var e = await this.etudiantRepository.createQueryBuilder("etudiant").where("etudiant.idetudiant = :idEtud").setParameters({idEtud: idEtu}).take(1).getOne();
      e.epreuve = await this.epreuveService.findOne(idEpreuve);
      e.ufr = await this.ufrService.findOne(idUfr);
      e.vague = await this.vagueService.findOne(idVague);
      e.groupe = await this.groupeService.findOne(idGroupe);
      this.etudiantRepository.save(e);
      return true
    } catch(error) {
      Logger.error(error);
    }
    return false;
  }
}
