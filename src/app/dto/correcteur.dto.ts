import { IsNotEmpty } from 'class-validator';
export class CreateCorrecteurDTO {
   
  @IsNotEmpty()
  pseudo: string;

}
