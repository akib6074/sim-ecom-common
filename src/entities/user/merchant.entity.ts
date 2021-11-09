import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { ShopEntity } from '../shop/shop.entity';

@Entity({ name: 'merchants', schema: 'public' })
export class MerchantEntity extends CustomBaseEntity {
  @OneToMany(() => ShopEntity, (shopEntity) => shopEntity.merchant)
  @JoinColumn({ name: 'merchant_id' })
  shops: ShopEntity[];

  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.merchant)
  @JoinColumn({ name: 'merchant_id' })
  notes: NoteEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;
}
