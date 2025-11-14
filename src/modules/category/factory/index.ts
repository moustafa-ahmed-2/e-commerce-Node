




import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { Category } from "../entities/category.entity";
import slugify from "slugify";
import { CategoryRepository } from "@models/category/category.repository";

@Injectable()
export class CategoryFactoryService {

constructor(private readonly categoryRepository: CategoryRepository){}

  createCategory(createCategoryDto: CreateCategoryDto, user: any) {
    const category = new Category();

    category.name = createCategoryDto.name;
    slugify.extend({ heart: "love" });

    category.slug = slugify(createCategoryDto.name, {
      replacement: "-",
      lower: true,
      trim: true,
    });

    category.createBy = user._id;
    category.logo = createCategoryDto.logo;

    return category;
  }

 async updateCategory( id:string , updateCategoryDto: UpdateCategoryDto) {

    
    const oldCategory = await this.categoryRepository.getOne({_id:id}) 
    const category = new Category();

    if (updateCategoryDto.name) {
      category.name =await updateCategoryDto.name    ;
      category.slug = slugify(updateCategoryDto.name, {
        replacement: "-",
        lower: true,
        trim: true,
      });
    }

    if (updateCategoryDto.logo) {
      category.logo = updateCategoryDto.logo;
    }

    return category;
  }
}


