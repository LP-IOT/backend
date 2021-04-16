import { IsNotEmpty } from 'class-validator';
export class CreateCopieDTO {
   
  @IsNotEmpty()
  note: number;

  @IsNotEmpty()
  idEtu: number;

  @IsNotEmpty()
  idDomaine: number;    

  @IsNotEmpty()
  idLot: number;

  @IsNotEmpty()
  idEpreuve: number;

}
