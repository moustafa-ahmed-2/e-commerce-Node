import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryRepository } from '@models/category/category.repository';
import { id } from 'zod/v4/locales';
import { Types } from 'mongoose';

@Injectable()
export class CategoryService {
  
  constructor(private readonly categoryRepository:CategoryRepository){}
  

 async create(category: Category) {
  const categoryExist =  await this.categoryRepository.getOne(
    {slug:category.slug,
    _id:{$ne:id}

    })

  if(categoryExist) throw new ConflictException('category already Exist')
  return    await this.categoryRepository.create(category)

  }

  findAll(query:any) {

    this.categoryRepository.getAll({} , {} , {limit:query.limit , skip:query.page *  (query.limit -1)})
  }

async  findOne(id:string | Types.ObjectId ) {
   const category = await  this.categoryRepository.getOne({_id:id})
   if(!category) throw new NotFoundException("category not found")
    return category
  }

  async update(id: string, category: Category) {
   const categoryExist  = await this.categoryRepository.getOne({slug:category.slug})
   if(categoryExist) throw new ConflictException("category Already Exists");
     return await this.categoryRepository.updateOne({_id:id} , category , {new:true}  )


  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}

