import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etudiant } from './entities/etudiant.entity';

@Injectable()
export class EtudiantService {
  constructor(
    @InjectRepository(Etudiant)
    private etudiantRepository: Repository<Etudiant>,
  ) {}

  async findOne(id: number) {
    return await this.etudiantRepository.findOne({ id });
  }

  async findAll() {
    return await this.etudiantRepository.find();
  }

  async importEtudiant() {
    const e = new Etudiant();
    if(this.etudiantRepository.save(e)) {
      return true;
    }
    else {
      return false;
    }

  }
}
