import { Body, Controller, Get, Logger, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Etudiant } from './app/etudiant/entities/etudiant.entity';
import { EtudiantService } from './app/etudiant/etudiant.service';
import { Lot } from './app/lot/entities/lot.entity';
import { LotService } from './app/lot/lot.service';
import { CreateSalleDTO } from './app/dto/salle.dto';
import { SalleService } from './app/salle/salle.service';
import { CreateLotDTO } from './app/dto/lot.dto';
import { Salle } from './app/salle/entities/salle.entity';
import { UfrService } from './app/ufr/ufr.service';
import { Ufr } from './app/ufr/entities/ufr.entity';
import { VagueService } from './app/vague/vague.service';
import { Vague } from './app/vague/entities/vague.entity';
import { Groupe } from './app/groupe/entities/group.entity';
import { GroupeService } from './app/groupe/group.service';
import { EpreuveService } from './app/epreuve/epreuve.service';
import { Epreuve } from './app/epreuve/entities/epreuve.entity';
import { DomaineService } from './app/domaine/domaine.service';
import { CorrecteurService } from './app/correcteur/correcteur.service';
import { CopieService } from './app/copies/copie.service';
import { BarreService } from './app/barre/barre.service';
import { AdmissionService } from './app/admission/admission.service';
import { Domaine } from './app/domaine/entities/domaine.entity';
import { Correcteur } from './app/correcteur/entities/correcteur.entity';
import { Copie } from './app/copies/entities/copie.entity';
import { Barre } from './app/barre/entities/barre.entity';
import { Admission } from './app/admission/entities/admission.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileURLToPath } from 'node:url';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly etudiantService: EtudiantService,
    private readonly salleService: SalleService, private readonly lotService: LotService, private readonly ufrService: UfrService,
    private readonly vagueService: VagueService, private readonly groupeService: GroupeService, private readonly epreuveService: EpreuveService,
    private readonly domaineService: DomaineService, private readonly correcteurService: CorrecteurService, private readonly copieService: CopieService,
    private readonly barreService: BarreService, private readonly admissionService: AdmissionService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('etudiant')
  async getListEtudiant(): Promise<Etudiant[]> {
    return await this.etudiantService.findAll();
  }

  @Post('import/etudiant')
  @UseInterceptors(FileInterceptor('file'))
  async importCSVEtudiant(@UploadedFile() file: Express.Multer.File) {
    console.log(await this.etudiantService.importEtudiant(file));
    //return await this.etudiantService.importEtudiant();
  }

  /** Salle Service Endpoint */

  @Get('salle')
  async getAllSalle(): Promise<Salle[]> {
    return await this.salleService.findAll();
  }

  @Post('salle')
  async createSalle(@Body() input: CreateSalleDTO): Promise<Boolean> {
    return await this.salleService.createSalle(input.designation, input.emplacement, input.capaciteOrdinateur, input.lotId);
  }

  /** Lot Service Endpoint */

  @Get('lot')
  async getAllLot(): Promise<Lot[]> {
    return await this.lotService.findAll();
  }

  @Post('lot')
  async createLot(@Body() input: CreateLotDTO): Promise<Boolean> {
    return await this.lotService.createLot(input.numLot);
  }

  /** Ufr Service Endpoint */

  @Get('ufr')
  async getAllUfr(): Promise<Ufr[]> {
    return await this.ufrService.findAll();
  }

  /** Vague Service Endpoint */
  @Get('vague')
  async getAllVague(): Promise<Vague[]> {
    return await this.vagueService.findAll();
  }

  /** Groupe Service Endpoint */
  @Get('groupe')
  async getAllGroupe(): Promise<Groupe[]> {
    return await this.groupeService.findAll();
  }
  
  /** Epreuve Service Endpoint */
  @Get('epreuve')
  async getAllEpreuve(): Promise<Epreuve[]> {
    return await this.epreuveService.findAll();
  }

  /** Domaine Service Endpoint */
  @Get('domaine')
  async getAllDomaine(): Promise<Domaine[]> {
    return await this.domaineService.findAll();
  }

  /** Correcteur Service Endpoint */
  @Get('correcteur')
  async getAllCorrecteur(): Promise<Correcteur[]> {
    return await this.correcteurService.findAll();
  }

  /** Correcteur Service Endpoint */
  @Get('copie')
  async getAllCopie(): Promise<Copie[]> {
    return await this.copieService.findAll();
  }

  /** Barre Service Endpoint */
  @Get('barre')
  async getAllBarre(): Promise<Barre[]> {
    return await this.barreService.findAll();
  }

  /** Admission Service Endpoint */
  @Get('admission')
  async getAllAdmission(): Promise<Admission[]> {
    return await this.admissionService.findAll();
  }


}
