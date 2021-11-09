import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Bool } from '../../../enum/bool.enum';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { AttributeEntity } from './attribute.entity';

@Entity({ name: 'attribute_groups', schema: 'public' })
export class AttributeGroupEntity extends CustomBaseEntity {
  @Column({
    type: 'enum',
    name: 'is_color_group',
    enum: Bool,
    default: `${Bool.No}`,
  })
  isColorGroup: Bool;

  @Column({ type: 'varchar', name: 'name', length: 50 })
  name: string;

  @Column({ type: 'varchar', name: 'description', length: 255 })
  description: string;

  @Column({ type: 'int', name: 'position' })
  position: number;

  @OneToMany(
    () => AttributeEntity,
    (attributeEntity) => attributeEntity.attributeGroup,
  )
  @JoinColumn({ name: 'attribute_id' })
  attributes: AttributeEntity[];
}
