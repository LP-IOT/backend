import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barre } from './entities/barre.entity';



@Injectable()
export class BarreService {
  constructor(
    @InjectRepository(Barre)
    private barreRepository: Repository<Barre>,
  ) {}

  async findOne(id: number) {
    return await this.barreRepository.findOne({ id });
  }
  async findAll() {
    return await this.barreRepository.find();
  }
}
