import { Module } from '@nestjs/common';


import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserMongoModule } from '@shared/modules/user-mongo.module';

@Module({

  imports:[
    UserMongoModule
   ] , 
  controllers: [ProductController],
  providers: [ProductService  ],
})
export class ProductModule {}
