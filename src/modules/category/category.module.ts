// import { Module } from '@nestjs/common';
// import { CategoryService } from './category.service';
// import { CategoryController } from './category.controller';
// import { CategoryRepository } from '@models/category/category.repository';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Category, categorySchema } from '@models/category/category.schema';
// import { CategoryFactoryService } from './factory';
// import { JwtService } from '@nestjs/jwt';

// @Module({
  
//   imports:[
//     MongooseModule.forFeature([{name:Category.name , schema:categorySchema}])
//   ] , 
//   controllers: [CategoryController],
//   providers: [
//      CategoryService ,
//      CategoryRepository , 
//      CategoryFactoryService , 
//      JwtService],
// })
// export class CategoryModule {}


























import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from '@models/category/category.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, categorySchema } from '@models/category/category.schema';
import { CategoryFactoryService } from './factory';
import { JwtService } from '@nestjs/jwt';
import { UserMongoModule } from '@shared/modules/user-mongo.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: categorySchema }]),
    UserMongoModule, 
  ],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    CategoryFactoryService,
    JwtService,
  ],

  exports:[  CategoryRepository , CategoryFactoryService]
})
export class CategoryModule {}
