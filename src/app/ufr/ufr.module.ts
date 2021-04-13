import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ufr } from './entities/ufr.entity';
import { UfrService } from './ufr.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ufr])],
  providers: [UfrService],
  exports: [UfrService],
})
export class UfrModule {}
