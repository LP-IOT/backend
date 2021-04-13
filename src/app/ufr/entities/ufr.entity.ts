import { Etudiant } from 'src/app/etudiant/entities/etudiant.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Ufr extends BaseFieldEntity {
    
    @Column('text', { nullable: false })
    nom: string;
    
    @OneToMany(
        () => Etudiant,
        etudiant => etudiant.id,
      )
      etudiants: Etudiant[];
    

  
}
