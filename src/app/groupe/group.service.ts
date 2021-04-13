import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Groupe } from './entities/group.entity';

@Injectable()
export class GroupeService {
  constructor(
    @InjectRepository(Groupe)
    private groupeRepository: Repository<Groupe>,
  ) {}

  async findOne(id: number) {
    return await this.groupeRepository.findOne({ id });
  }
  async findAll() {
    return await this.groupeRepository.find();
  }
}
