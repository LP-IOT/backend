import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vague } from './entities/vague.entity';

import { VagueService } from './vague.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vague])],
  providers: [VagueService],
  exports: [VagueService],
})
export class VagueModule {}
