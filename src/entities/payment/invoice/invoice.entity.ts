import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { InvoiceStatus } from '../../../enum/invoice-status.enum';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { UserEntity } from '../../user/user.entity';
import { InvoiceDetailsEntity } from './invoice-details.entity';
import { AddressEntity } from '../../../entities/core/address.entity';
import { OrderEntity } from '../../order/order.entity';

@Entity({ name: 'invoices', schema: 'public' })
@Index('invoices-status-isactive-idx', ['status', 'isActive'])
export class InvoiceEntity extends CustomBaseEntity {
  @Column({
    type: 'enum',
    name: 'status',
    enum: InvoiceStatus,
  })
  @Index('invoices-status-idx')
  status: InvoiceStatus;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.invoices)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @OneToMany(
    () => InvoiceDetailsEntity,
    (invoiceDetailsEntity) => invoiceDetailsEntity.invoice,
  )
  @JoinColumn({ name: 'invoice_id' })
  invoiceDetails: InvoiceDetailsEntity[];

  @ManyToOne(
    () => AddressEntity,
    (addressEntity) => addressEntity.billingInvoices,
  )
  @JoinColumn({ name: 'billing_address_id' })
  billingAddress: AddressEntity;

  @ManyToOne(
    () => AddressEntity,
    (addressEntity) => addressEntity.shippingInvoices,
  )
  @JoinColumn({ name: 'shipping_address_id' })
  shippingAddress: AddressEntity;
}
