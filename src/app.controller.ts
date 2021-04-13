import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Etudiant } from './app/etudiant/entities/etudiant.entity';
import { EtudiantService } from './app/etudiant/etudiant.service';
import { Lot } from './app/lot/entities/lot.entity';
import { LotService } from './app/lot/lot.service';
import { CreateSalleDTO } from './app/dto/salle.dto';
import { SalleService } from './app/salle/salle.service';
import { CreateLotDTO } from './app/dto/lot.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly etudiantService: EtudiantService,
    private readonly salleService: SalleService, private readonly lotService: LotService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('etudiant')
  async getListEtudiant(): Promise<Etudiant[]> {
    return await this.etudiantService.findAll();
  }

  @Post('import/etudiant')
  async importCSVEtudiant(): Promise<Boolean> {
    return await this.etudiantService.importEtudiant();
  }

  /** Salle Service Endpoint */

  @Post('salle')
  async createSalle(designation: string, emplacement: string, capaciteOrdinateur: number, lotId: number): Promise<Boolean> {
    return await this.salleService.createSalle(designation, emplacement, capaciteOrdinateur, lotId);
  }

  /** Lot Service Endpoint */

  @Get('lot')
  async getAllLot(): Promise<Lot[]> {
    return await this.lotService.getAllLot();
  }

  @Post('lot')
  async createLot(numLot: string): Promise<Boolean> {
    return await this.lotService.createLot(numLot);
  }
}
