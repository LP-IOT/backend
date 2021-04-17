import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Epreuve } from './entities/epreuve.entity';

@Injectable()
export class EpreuveService {
  constructor(
    @InjectRepository(Epreuve)
    private epreuveRepository: Repository<Epreuve>,
  ) {}

  async findOne(id: number): Promise<Epreuve> {
    return await this.epreuveRepository.findOne({ id });
  }
  async findBarre(id: number) : Promise<Epreuve> {
    return await this.epreuveRepository.findOne(id, {relations:['barre']})
  }
  async findAll() {
    return await this.epreuveRepository.find();
  }

}
