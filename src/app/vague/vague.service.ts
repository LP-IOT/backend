import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vague } from './entities/vague.entity';

@Injectable()
export class VagueService {
  constructor(
    @InjectRepository(Vague)
    private vagueRepository: Repository<Vague>,
  ) {}

  async findOne(id: number) {
    return await this.vagueRepository.findOne({ id });
  }

  
}
