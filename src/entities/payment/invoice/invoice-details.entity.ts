import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ProductAttributeEntity } from '../../../entities/product/product-attribute.entity';
import { ProductEntity } from '../../../entities/product/product.entity';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { InvoiceEntity } from './invoice.entity';

@Entity({ name: 'invoice_details', schema: 'public' })
export class InvoiceDetailsEntity extends CustomBaseEntity {
  @Column({ type: 'text', name: 'additional', nullable: true })
  additional: string;

  @Column({ type: 'text', name: 'note', nullable: true })
  note: string;

  @Column({ type: 'int', name: 'quantity', nullable: false })
  quantity: number;

  @Column({ type: 'decimal', name: 'price', nullable: true })
  price: number;

  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.invoiceDetails,
  )
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.invoiceDetails,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @ManyToOne(
    () => InvoiceEntity,
    (invoiceEntity) => invoiceEntity.invoiceDetails,
  )
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;
}
