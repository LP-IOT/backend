import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Copie } from './entities/copie.entity';


@Injectable()
export class CopieService {
  constructor(
    @InjectRepository(Copie)
    private copieRepository: Repository<Copie>,
  ) {}

  async findOne(id: number) {
    return await this.copieRepository.findOne({ id });
  }
  async findAll() {
    return await this.copieRepository.find();
  }
}
