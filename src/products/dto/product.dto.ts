import { PartialType } from '@nestjs/swagger';
import { IsDate, IsInt, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  category: string;

  @IsInt()
  @IsPositive()
  stock: number;

  @IsDate()
  createDate: Date;

  @IsDate()
  lastUpdateDate: Date;
}

export class UpdateProdcutDto extends PartialType(CreateProductDto) {}
