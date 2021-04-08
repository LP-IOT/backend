import { Column, Entity } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Etudiant extends BaseFieldEntity {

  @Column('text', { nullable: false })
  nom: string;

  

  
}