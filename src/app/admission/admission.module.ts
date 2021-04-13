import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdmissionService } from './admission.service';
import { Admission } from './entities/admission.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Admission])],
  providers: [AdmissionService],
  exports: [AdmissionService],
})
export class AdmissionModule {}
