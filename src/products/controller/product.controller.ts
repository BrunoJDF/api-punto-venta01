import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/shared/parse-int.pipe';
import { DataResponseInterceptor } from '../interceptors/data-response-interceptor.interceptor';
import { CreateProductDto, UpdateProdcutDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private service: ProductService) { }

  @Get()
  @UseInterceptors(DataResponseInterceptor)
  getProducts() {
    return this.service.findAll();
  }

  @Post()
  async createProduct(@Body() payload: CreateProductDto) {
    return this.service.create(payload);
  }

  @Get(':id')
  @UseInterceptors(DataResponseInterceptor)
  getOneProduct(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProdcutDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
