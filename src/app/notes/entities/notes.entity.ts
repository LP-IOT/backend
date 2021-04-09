import { Column, Entity } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Note extends BaseFieldEntity {

  @Column('integer', { nullable: false })
  montant: number;

  
}
