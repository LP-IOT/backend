import { Injectable, Logger } from '@nestjs/common';
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

  async getAllLot(): Promise<Lot[]> {
    return await this.lotRepository.find();
  }

  async createLot(numLot: number): Promise<Boolean> {
    var l = new Lot();
    l.numLot = numLot;
    try {
      this.lotRepository.save(l);
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }
}
