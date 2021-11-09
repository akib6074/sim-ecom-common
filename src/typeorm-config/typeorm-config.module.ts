import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomBaseEntity } from '../entities/core/custom-base.entity';
import { DistrictEntity } from '../entities/core/district.entity';
import { ThanaEntity } from '../entities/core/thana.entity';
import { AddressEntity } from '../entities/core/address.entity';
import { CountryEntity } from '../entities/core/country.entity';
import { CurrencyEntity } from '../entities/core/currency.entity';
import { NoteEntity } from '../entities/core/note.entity';
import { RiskEntity } from '../entities/core/risk.entity';
import { StateEntity } from '../entities/core/state.entity';
import { ProfileEntity } from '../entities/user/profile.entity';
import { RoleEntity } from '../entities/user/role.entity';

import { UserRoleEntity } from '../entities/user/user-role.entity';
import { UserEntity } from '../entities/user/user.entity';
import { AffiliatorEntity } from '../entities/user/affiliator.entity';
import { CustomerEntity } from '../entities/user/customer.entity';
import { EmployeeEntity } from '../entities/user/employee.entity';
import { MerchantEntity } from '../entities/user/merchant.entity';
import { SupplierEntity } from '../entities/user/supplier.entity';

import { ResidentialAreaEntity } from '../entities/core/residential-area.entity';
import { ContactUsEntity } from '../entities/core/contact-us.entity';

import { CategoryEntity } from '../entities/category/category.entity';

import { ShopEntity } from '../entities/shop/shop.entity';

import { ProductEntity } from '../entities/product/product.entity';
import { ProductAttributeEntity } from '../entities/product/product-attribute.entity';

import { AttributeEntity } from '../entities/product/attribute/attribute.entity';
import { AttributeGroupEntity } from '../entities/product/attribute/attribute-group.entity';

import { TransMasterEntity } from '../entities/payment/trans-master.entity';
import { InvoiceEntity } from '../entities/payment/invoice/invoice.entity';

import { SslPrepareEntity } from '../entities/payment/ssl/ssl-prepare.entity';
import { OnlinePaymentActivityLogEntity } from '../entities/payment/ssl/online-payment-activity-log.entity';

import { CartEntity } from '../entities/cart/cart.entity';
import { OrderEntity } from '../entities/order/order.entity';
import { ShopTypeEntity } from '../entities/shop/shop-type.entity';
import { InvoiceDetailsEntity } from '../entities/payment/invoice/invoice-details.entity';
import { CartDetailsEntity } from '../entities/cart/cart-details.entity';
import { OrderDetailsEntity } from '../entities/order/order-details.entity';
import { TicketEntity } from '../entities/core/ticket.entity';
import { TicketDepartmentEntity } from '../entities/core/ticket-department.entity';
import { BrandEntity } from '../entities/core/brand.entity';
import { PromotionEntity } from '../entities/shop/promotion.entity';
import { ProductReviewEntity } from '../entities/product/product-review.entity';
import { NotificationEntity } from '../entities/notification/notification.entity';
import { ShopReviewEntity } from '../entities/shop/shop-review.entity';
import { TransporterEntity } from '../entities/user/transporter.entity';
import { ConfigurationEntity } from '../entities/configuration/configuration.entity';
import { CouponUsageEntity } from '../entities/coupon/coupon-usage.entity';
import { CouponEntity } from '../entities/coupon/coupon.entity';
import { StockItemTransactionEntity } from '../entities/stock/stock-item-transaction.entity';
import { StockPurchaseEntity } from '../entities/stock/stock-purchase.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_DB'),
        schema: configService.get('DATABASE_SCHEMA'),
        entities: [
          UserEntity,
          UserRoleEntity,
          RoleEntity,
          ProfileEntity,
          EmployeeEntity,
          CustomerEntity,
          AffiliatorEntity,
          MerchantEntity,
          SupplierEntity,
          StateEntity,
          DistrictEntity,
          ThanaEntity,
          ResidentialAreaEntity,
          RiskEntity,
          NoteEntity,
          CurrencyEntity,
          CountryEntity,
          AddressEntity,
          CustomBaseEntity,
          ContactUsEntity,
          CategoryEntity,
          ShopEntity,
          ProductEntity,
          ProductAttributeEntity,
          AttributeEntity,
          AttributeGroupEntity,
          TransMasterEntity,
          InvoiceEntity,
          InvoiceDetailsEntity,
          SslPrepareEntity,
          OnlinePaymentActivityLogEntity,
          CartEntity,
          CartDetailsEntity,
          OrderEntity,
          OrderDetailsEntity,
          ShopTypeEntity,
          TicketEntity,
          TicketDepartmentEntity,
          BrandEntity,
          ShopReviewEntity,
          PromotionEntity,
          ProductReviewEntity,
          NotificationEntity,
          TransporterEntity,
          ConfigurationEntity,
          CouponEntity,
          CouponUsageEntity,
          StockPurchaseEntity,
          StockItemTransactionEntity,
        ],
        synchronize: !!configService.get<boolean>('DATABASE_SYNCRONIZE'),
        logging: false, //!!configService.get<boolean>('DATABASE_LOGGING'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeormConfigModule {}
