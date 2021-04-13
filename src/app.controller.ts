import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Etudiant } from './app/etudiant/entities/etudiant.entity';
import { EtudiantService } from './app/etudiant/etudiant.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly etudiantService: EtudiantService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('etudiant')
  async getListEtudiant(): Promise<Etudiant[]> {
    return await this.etudiantService.findAll();
  }
}
