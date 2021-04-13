import { Domaine } from 'src/app/domaine/entities/domaine.entity';
import { Etudiant } from 'src/app/etudiant/entities/etudiant.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Admission extends BaseFieldEntity {

  
  @Column('text', { nullable: false })
  resultatQualitatif: string;

  @Column({nullable: false})
  resultatQuantitatif: number;

  @Column({nullable: false})
  dateCapitalisation: Date;

  @OneToMany(
    () => Etudiant,
    etudiant => etudiant.id,
  )
  etudiants: Etudiant[];

  @OneToMany(
    () => Domaine,
    domaine => domaine.id
  )
  domaines: Domaine[];


  
}