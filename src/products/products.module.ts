import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductService } from './service/product.service';
import { ProductController } from './controller/product.controller';
import { Product } from './entity/product';
import { Message } from './constants/message';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product
    ]),
  ],
  providers: [ProductService, Message],
  controllers: [ProductController],
})
export class ProductsModule { }
