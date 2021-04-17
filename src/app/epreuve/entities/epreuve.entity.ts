import { Barre } from 'src/app/barre/entities/barre.entity';
import { Copie } from 'src/app/copies/entities/copie.entity';
import { Etudiant } from 'src/app/etudiant/entities/etudiant.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Epreuve extends BaseFieldEntity {

  
  @Column('text', { nullable: false })
  nom: string;
  @Column('integer', { nullable: false })
  anneeEpreuve: number;
  
  @OneToMany(
    () => Etudiant,
    etudiant => etudiant.id,
  )
  etudiants: Etudiant[];

  @OneToMany(
    () => Copie,
    copie => copie.id,
  )
  copies: Copie[];

  @ManyToOne(
    () => Barre,
    barre => barre.id, { eager: false }
  )
  @JoinColumn()
  barre: Barre;
}