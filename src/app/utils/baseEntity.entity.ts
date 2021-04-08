import { BaseEntity, BeforeUpdate, Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseFieldEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date | null;

  @BeforeUpdate()
  updateField() {
    this.updatedAt = new Date();
  }
}
