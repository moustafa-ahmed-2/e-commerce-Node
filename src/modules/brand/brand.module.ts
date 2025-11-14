import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { BrandFactoryService } from './factory/brand.factory';
import { BrandRepostory } from '@models/brand/brand.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Brand, BrandSchema } from '@models/brand/brand.schema';
import { JwtService } from '@nestjs/jwt';
import { UserMongoModule } from '@shared/modules/user-mongo.module';

@Module({

  imports:[
    UserMongoModule,
MongooseModule.forFeature([{name:Brand.name, schema:BrandSchema}])
  ],
  controllers: [BrandController],

  providers: [BrandService , BrandFactoryService , BrandRepostory ],
  exports: [BrandService , BrandFactoryService , BrandRepostory ],


})
export class BrandModule {}
