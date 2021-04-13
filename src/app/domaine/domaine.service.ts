import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Domaine } from './entities/domaine.entity';


@Injectable()
export class DomaineService {
  constructor(
    @InjectRepository(Domaine)
    private domaineRepository: Repository<Domaine>,
  ) {}

  async findOne(id: number) {
    return await this.domaineRepository.findOne({ id });
  }
}
