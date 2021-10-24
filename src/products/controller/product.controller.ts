import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  getProducts() {
    return this.service.findAll();
  }
}
