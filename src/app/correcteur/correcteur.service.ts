import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Correcteur } from './entities/correcteur.entity';


@Injectable()
export class CorrecteurService {
  constructor(
    @InjectRepository(Correcteur)
    private correcteurRepository: Repository<Correcteur>,
  ) {}

  async findOne(id: number) {
    return await this.correcteurRepository.findOne({ id });
  }
  async findAll() {
    return await this.correcteurRepository.find();
  }
  async createCorrecteur(pseudo: string): Promise<Boolean> {
    try {
      var c = new Correcteur();
      c.pseudo = pseudo;
      c.save();
      return true;
    } catch(error) {
      Logger.error(error);
    }
    return false;
  }
}
