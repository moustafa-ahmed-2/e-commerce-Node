import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ConfigService } from '@nestjs/config';
import { SallerRepository } from '@models/saller/saller.repository';
import { AdminRepository } from '@models/admin/admin.repository';
import { CustomerRepository } from '@models/customer/customer.repository';

@Injectable()
export class ProductService {
constructor(
  private readonly configService:ConfigService , 
  private readonly sallerRepository:SallerRepository , 
  private readonly adminRepository:AdminRepository , 
  private readonly customerRepository: CustomerRepository
  

){}
  create(createProductDto: CreateProductDto) {
    this.configService.get('db').url
    return 'This action adds a new product';
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
