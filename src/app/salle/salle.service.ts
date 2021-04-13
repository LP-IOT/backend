import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lot } from '../lot/entities/lot.entity';
import { LotService } from '../lot/lot.service';
import { CreateSalleDTO } from './dto/salle.dto';
import { Salle } from './entities/salle.entity';

@Injectable()
export class SalleService {
  constructor(
    @InjectRepository(Salle)
    private salleRepository: Repository<Salle>,
    @Inject(LotService)
    private lotService
  ) {}

  async findOne(id: number) {
    return await this.salleRepository.findOne({ id });
  }


  async createSalle(designation: string, emplacement: string, capaciteOrdinateur: number, lotId: number) {
    try {
      var s = new Salle();
      s.designation = designation;
      s.capaciteOrdinateur = capaciteOrdinateur;
      s.emplacement = emplacement;
      s.lot = await this.lotService.findOne(lotId);
      s.save();
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }
}
