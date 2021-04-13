import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lot } from './entities/lot.entity';


@Injectable()
export class LotService {
  constructor(
    @InjectRepository(Lot)
    private lotRepository: Repository<Lot>,
  ) {}

  async findOne(id: number) {
    return await this.lotRepository.findOne({ id });
  }

  async getAllLot() {
    return await this.lotRepository.find();
  }
}
