import { Domaine } from 'src/app/domaine/entities/domaine.entity';
import { Epreuve } from 'src/app/epreuve/entities/epreuve.entity';
import { Etudiant } from 'src/app/etudiant/entities/etudiant.entity';
import { Groupe } from 'src/app/groupe/entities/group.entity';
import { Lot } from 'src/app/lot/entities/lot.entity';
import { Ufr } from 'src/app/ufr/entities/ufr.entity';
import { Vague } from 'src/app/vague/entities/vague.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Copie extends BaseFieldEntity {

  @Column('integer', { nullable: false })
  note: number;

  @ManyToOne(
    () => Etudiant,
    etudiant => etudiant.idetudiant,  {eager: false}
  )
  @JoinColumn()
  etudiant: Etudiant;

  @ManyToOne(
    () => Domaine,
    domaine => domaine.id,  {eager: false}
  )
  @JoinColumn()
  domaine: Domaine;

  @ManyToOne(
    () => Lot,
    lot => lot.id, {eager: false}
  )
  @JoinColumn()
  lot: Lot;

  @ManyToOne(
    () => Epreuve,
    epreuve => epreuve.id, { eager: false }
  )
  @JoinColumn()
  epreuve: Epreuve;
}