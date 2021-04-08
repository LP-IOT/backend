import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtudiantService } from './etudiant.service';
import { Etudiant } from './etudiant.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Etudiant])],
  providers: [EtudiantService],
  exports: [EtudiantService],
})
export class EtudiantModule {}
