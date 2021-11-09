import { BaseDto } from '../core/base.dto';
import { ShopDto } from '../shop/shop.dto';
import { NoteDto } from '../core/note.dto';
import { RiskDto } from '../core/risk.dto';
import { Type } from 'class-transformer';

export class MerchantDto extends BaseDto {
  @Type(() => ShopDto)
  shops: ShopDto[];

  @Type(() => NoteDto)
  notes: NoteDto[];

  @Type(() => RiskDto)
  risk: RiskDto;
}
