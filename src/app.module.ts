
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from  './infra/database/database.module'
import { AdmissionModule } from './app/admission/admission.module';
import { BarreModule } from './app/barre/barre.module';
import { CopieModule } from './app/copies/copie.module';
import { CorrecteurModule } from './app/correcteur/correcteur.module';
import { DomaineModule } from './app/domaine/domaine.module';
import { EpreuveModule } from './app/epreuve/epreuve.module';
import { Etudiant } from './app/etudiant/entities/etudiant.entity';
import { EtudiantModule } from './app/etudiant/etudiant.module';
import { GroupeModule } from './app/groupe/group.module';
import { LotModule } from './app/lot/lot.module';
import { SalleModule } from './app/salle/salle.module';
import { UfrModule } from './app/ufr/ufr.module';
import { VagueModule } from './app/vague/vague.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    DatabaseModule,
    AdmissionModule,
    BarreModule,
    CopieModule,
    CorrecteurModule,
    DomaineModule,
    EpreuveModule,
    EtudiantModule,
    GroupeModule,
    LotModule,
    SalleModule,
    UfrModule,
    VagueModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
