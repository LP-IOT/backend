import { Lot } from 'src/app/lot/entities/lot.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Correcteur extends BaseFieldEntity {

  
  @Column('text', { nullable: false })
  pseudo: string;

  @ManyToOne(
    () => Lot,
    lot => lot.id,
  )
  lot: Lot;

  
}