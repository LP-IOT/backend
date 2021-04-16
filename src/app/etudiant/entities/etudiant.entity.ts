import { AdmissionService } from 'src/app/admission/admission.service';
import { Admission } from 'src/app/admission/entities/admission.entity';
import { Copie } from 'src/app/copies/entities/copie.entity';
import { Epreuve } from 'src/app/epreuve/entities/epreuve.entity';
import { Groupe } from 'src/app/groupe/entities/group.entity';
import { Ufr } from 'src/app/ufr/entities/ufr.entity';
import { Vague } from 'src/app/vague/entities/vague.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Etudiant extends BaseFieldEntity {

  @Column('integer', {nullable: false})
  idetudiant: number;
  @Column('text', { nullable: false })
  nom: string;
  @Column('text', { nullable: false })
  prenom: string;

  @ManyToOne(
    () => Epreuve,
    epreuve => epreuve.nom,{eager:false}
  )
  @JoinColumn()
  epreuve: Epreuve;

  @ManyToOne(
    () => Groupe,
    groupe => groupe.id,{eager:false}
  )
  @JoinColumn()
    groupe: Groupe;

  @ManyToOne(
    () => Ufr,
    ufr => ufr.id, {eager:false}
  )
  @JoinColumn()
  ufr: Ufr;

  @ManyToOne(
    () => Vague,
    vague => vague.id, {eager:false}
  )
  @JoinColumn()
  vague: Vague;

  @OneToMany(
    () => Admission,
    admission => admission.id
  )
  admission: Admission[];

  @OneToMany(
    () => Copie,
    copie => copie.id
  )
  copies: Copie[];
}