import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etudiant } from './entities/etudiant.entity';
import { CsvParser } from 'nest-csv-parser';


@Injectable()
export class EtudiantService {
  constructor(
    @InjectRepository(Etudiant)
    private etudiantRepository: Repository<Etudiant>,
    private readonly csvParser: CsvParser
  ) {}

  async findOne(id: number) {
    return await this.etudiantRepository.findOne({ id });
  }

  async findAll() {
    return await this.etudiantRepository.find();
  }

  async importEtudiant(file: Express.Multer.File): Promise<Boolean> {
    try {
      var streamifier = require('streamifier/lib');
      const stream = streamifier.createReadStream(file.buffer);
      var entities = await this.csvParser.parse(stream, Etudiant, 1, null, { strict: true, separator: ',' });
      this.etudiantRepository.save(entities.list);
      return true;
    } catch (error) {
      Logger.error(error);
    }
    return false;
  }
}
