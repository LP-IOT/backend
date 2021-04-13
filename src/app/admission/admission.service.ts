import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admission } from './entities/admission.entity';



@Injectable()
export class AdmissionService {
  constructor(
    @InjectRepository(Admission)
    private admissionRepository: Repository<Admission>,
  ) {}

  async findOne(id: number) {
    return await this.admissionRepository.findOne({ id });
  }
  async findAll() {
    return await this.admissionRepository.find();
  }
}
