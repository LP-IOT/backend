import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ufr } from './entities/ufr.entity';

@Injectable()
export class UfrService {
  constructor(
    @InjectRepository(Ufr)
    private ufrRepository: Repository<Ufr>,
  ) {}

  async findOne(id: number) {
    return await this.ufrRepository.findOne({ id });
  }
  async findAll() {
    return await this.ufrRepository.find();
  }
}
