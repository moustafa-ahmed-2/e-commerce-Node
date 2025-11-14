import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { BrandRepostory } from '@models/brand/brand.repository';
import { Types } from 'mongoose';

@Injectable()
export class BrandService {
   constructor(  private readonly brandRepostory:BrandRepostory){}



  async create(brand:Brand) {
    const brandExist = await this.brandRepostory.getOne({slug:brand.slug})
  if(brandExist) throw new ConflictException("brand already exists");
   return  await this.brandRepostory.create(brand)



  }

  findAll() {
    return `This action returns all brand`;
  }

 async findOne(id: string | Types.ObjectId) {
   const brandExist = await this.brandRepostory.getOne({_id:id})
      if(!brandExist) throw new NotFoundException("Brand Not found")
        return brandExist
     
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
