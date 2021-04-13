import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarreService } from './barre.service';
import { Barre } from './entities/barre.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Barre])],
  providers: [BarreService],
  exports: [BarreService],
})
export class BarreModule {}
