import { Etudiant } from 'src/app/etudiant/entities/etudiant.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseFieldEntity } from '../../utils/baseEntity.entity';

@Entity()
export class Vague extends BaseFieldEntity {
    
    @Column({ nullable: false })
    debutVague: Date;
        
    @Column({ nullable: false })
    finVague: Date;
    
    @OneToMany(
        () => Etudiant,
        etudiant => etudiant.id,
      )
      etudiants: Etudiant[];
    

  
}
