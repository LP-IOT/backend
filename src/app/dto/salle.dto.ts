import { IsNotEmpty } from 'class-validator';
export class CreateSalleDTO {
  
  @IsNotEmpty()
  designation: string;

  @IsNotEmpty()
  capaciteOrdinateur: number;

  @IsNotEmpty()
  emplacement: string;

  @IsNotEmpty()
  lotId: number;
}
