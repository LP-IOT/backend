import { IsNotEmpty } from 'class-validator';
export class CreateLotDTO {
   
  @IsNotEmpty()
  numLot: string;

}
