import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CopieService } from './copie.service';
import { Copie } from './entities/copie.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Copie])],
  providers: [CopieService],
  exports: [CopieService],
})
export class CopieModule {}
