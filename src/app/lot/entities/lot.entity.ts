import { Copie } from 'src/app/copies/entities/copie.entity';
import { Correcteur } from 'src/app/correcteur/entities/correcteur.entity';
import { Salle } from 'src/app/salle/entities/salle.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Lot extends BaseFieldEntity {

  @Column('text', {nullable: false})
  numLot: string;

  @ManyToOne(
    () => Correcteur,
    correcteur => correcteur.id,
  )
  correcteur: Correcteur[];

  @ManyToOne(
    () => Copie,
    copie => copie.id
  )
  copies: Copie[];

  @ManyToOne(
    () => Salle,
    salle => salle.id
  )
  salles: Salle[];
}