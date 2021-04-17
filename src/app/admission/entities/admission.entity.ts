import { Domaine } from 'src/app/domaine/entities/domaine.entity';
import { Etudiant } from 'src/app/etudiant/entities/etudiant.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Admission extends BaseFieldEntity {

  
  @Column('text', { nullable: false })
  resultatQualitatif: string;

  @Column('decimal',{nullable: false, precision: 5, scale: 2})
  resultatQuantitatif: number;

  @Column({nullable: false})
  dateCapitalisation: Date;

  @ManyToOne(
    () => Etudiant,
    etudiant => etudiant.id, {eager: false}
  )
  @JoinColumn()
  etudiants: Etudiant;

  @ManyToOne(
    () => Domaine,
    domaine => domaine.id, {eager:false}
  )
  @JoinColumn()
  domaines: Domaine;


}