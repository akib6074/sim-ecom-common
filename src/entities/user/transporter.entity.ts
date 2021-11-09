import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';

@Entity({ name: 'transporter', schema: 'public' })
export class TransporterEntity extends CustomBaseEntity {
  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.employee)
  @JoinColumn({ name: 'transporter_id' })
  notes: NoteEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;
}
