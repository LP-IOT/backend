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

  async findOne(id: number) {
    return await this.epreuveRepository.findOne({ id });
  }
}
