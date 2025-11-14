import { Injectable } from "@nestjs/common";
import { CreateBrandDto } from "../dto/create-brand.dto";
import { Brand } from "../entities/brand.entity";
import slugify from "slugify";


@Injectable()
export class BrandFactoryService{

createBrand(createBrandDTO:CreateBrandDto , user:any){
    const brand = new Brand();
    brand.name = createBrandDTO.name;
    brand.slug = slugify(createBrandDTO.name)
    brand.createdBy = user._id
    brand.updatedBy  = user._id
    brand.logo = createBrandDTO.logo

    return brand


}


}