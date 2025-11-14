import { AdminRepository } from '@models/admin/admin.repository';
import { CustomerRepository } from '@models/customer/customer.repository';
import { SallerRepository } from '@models/saller/saller.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { Product } from './entities/product.entity';
import { CategoryService } from '@modules/category/category.service';
import { BrandRepostory } from '@models/brand/brand.repository';
import { BrandService } from '@modules/brand/brand.service';

@Injectable()
export class ProductService {
constructor(
  private readonly configService:ConfigService , 
  private readonly sallerRepository:SallerRepository , 
  private readonly adminRepository:AdminRepository , 
  private readonly customerRepository: CustomerRepository,
  private readonly  productRepository: ProductRepository ,
  private readonly categoryService:CategoryService , 
  private readonly brandService:BrandService
  

){}
  async create(product: Product) {
   await this.categoryService.findOne(product.category )
  await  this.brandService.findOne(product.brandId)
  return await  this.productRepository.create(product)

  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
