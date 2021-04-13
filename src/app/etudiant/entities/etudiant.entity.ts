import { Epreuve } from 'src/app/epreuve/entities/epreuve.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Etudiant extends BaseFieldEntity {

  
  @Column('text', { nullable: false })
  nom: string;
  @Column('text', { nullable: false })
  prenom: string;

  @ManyToOne(
    () => Epreuve,
    epreuve => epreuve.nom,
  )
  epreuve: Epreuve;

  
}