import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etudiant } from '../etudiant/etudiant.entity';

@Injectable()
export class EtudiantService {
  constructor(
    @InjectRepository(Etudiant)
    private etudiantRepository: Repository<Etudiant>,
  ) {}

  async findOne(id: number) {
    return await this.etudiantRepository.findOne({ id });
  }
}
