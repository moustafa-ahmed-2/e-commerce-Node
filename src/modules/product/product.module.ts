import { Module } from '@nestjs/common';


import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserMongoModule } from '@shared/modules/user-mongo.module';
import { ProductFactoryService } from './factory/product.factory';
import { ProductRepository } from './product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from '@models/product/product.schema';
import { CategoryService } from '@modules/category/category.service';
import { BrandRepostory } from '@models/brand/brand.repository';
import { CategoryModule } from '@modules/category/category.module';
import { Brand, BrandSchema } from '@models/brand/brand.schema';
import { BrandModule } from '@modules/brand/brand.module';

@Module({

  imports:[
    UserMongoModule , MongooseModule.forFeature(
     [ 
      {
      name:Product.name ,
      schema:productSchema
    } , 
  
  
  ]
  
  ) , 
  CategoryModule,
  BrandModule
   ] , 
  controllers: [ProductController],
  providers: [ProductService , ProductFactoryService ,
     ProductRepository  , CategoryService   ],
})
export class ProductModule {}
















