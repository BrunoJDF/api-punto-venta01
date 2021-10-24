import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/shared/parse-int.pipe';
import { CreateProductDto, UpdateProdcutDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private service: ProductService) { }

  @Get()
  getProducts() {
    return this.service.findAll();
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    return this.service.create(payload);
  }

  @Get(':id')
  getOneProduct(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProdcutDto) {
    return this.service.update(id, payload);
  }
}
