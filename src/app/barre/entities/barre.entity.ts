import { Lot } from 'src/app/lot/entities/lot.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Barre extends BaseFieldEntity {

  
  @Column('integer', { nullable: false })
  annee: number;

  @Column({nullable: false})
  seuil: number;

  
}