import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api/v1/products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }
}
