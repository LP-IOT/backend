import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrecteurService } from './correcteur.service';
import { Correcteur } from './entities/correcteur.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Correcteur])],
  providers: [CorrecteurService],
  exports: [CorrecteurService],
})
export class CorrecteurModule {}
