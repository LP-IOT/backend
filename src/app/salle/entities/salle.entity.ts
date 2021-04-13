import { Correcteur } from 'src/app/correcteur/entities/correcteur.entity';
import { Lot } from 'src/app/lot/entities/lot.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Salle extends BaseFieldEntity {


  @Column('text', {nullable : false})
  designation: string;

  @Column('integer', {nullable: false})
  capaciteOrdinateur: number;

  @Column('text', {nullable: false})
  emplacement: string;

  
  @OneToMany(
    () => Lot,
    lot => lot.id
  )
  lot: Lot;
}