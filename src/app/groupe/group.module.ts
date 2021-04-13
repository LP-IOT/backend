import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groupe } from './entities/group.entity';
import { GroupeService } from './group.service';

@Module({
  imports: [TypeOrmModule.forFeature([Groupe])],
  providers: [GroupeService],
  exports: [GroupeService],
})
export class GroupeModule {}
