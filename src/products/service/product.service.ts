import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../constants/message';
import { CreateProductDto, UpdateProdcutDto } from '../dto/product.dto';
import { DataResponse } from '../dto/response.dto';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
    private message: Message,
  ) { }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const found = await this.repository.findOne(id).then(data => {
      if (!data) {
        throw new NotFoundException(this.message.notFoundException(id, 'producto'));
      }
      return data;
    });
    return found
  }

  create(payload: CreateProductDto) {
    const newProduct = this.repository.create(payload);
    return this.repository.save(newProduct)
  }

  async update(id: number, payload: UpdateProdcutDto) {
    const product = await this.repository.findOne(id);
    if (!product) {
      throw new NotFoundException(this.message.notFoundException(id, 'producto'));
    }
    this.repository.merge(product, payload);
    product.lastUpdateDate = new Date();

    return this.repository.save(product);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}
