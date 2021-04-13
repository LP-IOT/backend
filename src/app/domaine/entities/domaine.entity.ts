import { Admission } from 'src/app/admission/entities/admission.entity';
import { Copie } from 'src/app/copies/entities/copie.entity';
import { Lot } from 'src/app/lot/entities/lot.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Domaine extends BaseFieldEntity {

  
  @Column('text', { nullable: false })
  nom: string;

  @OneToMany(
    () => Domaine,
    domaine => domaine.id,
  )
  domaine: Domaine[];

  @OneToMany(
      () => Copie,
      copie => copie.id
  )
  copies: Copie[];

  @ManyToOne(
    () => Admission,
    admission => admission.id
  )
  admission: Admission;

}