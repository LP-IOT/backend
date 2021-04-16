import { IsNotEmpty } from 'class-validator';
export class UpdateEtudiantDTO {
   
  @IsNotEmpty()
  idEtu: number;

  @IsNotEmpty()
  idEpreuve: number;

  @IsNotEmpty()
  idGroupe: number;

  @IsNotEmpty()
  idUfr: number;

  @IsNotEmpty()
  idVague: number;
  @IsNotEmpty()
  idAdmission: number;
  @IsNotEmpty()
  idCopie: number;


}
