

import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { Product } from "@models/product/product.schema";
import slugify from "slugify";
import { Types } from "mongoose";

@Injectable()
export class ProductFactoryService {

  createProduct(createProductDto: CreateProductDto, user: any): Product {
    const product = new Product();

    product.name = createProductDto.name;
     product.description = createProductDto.description;
    product.slug = slugify(createProductDto.name, {
      replacement: '-',
      lower: true,
      trim: true
    });

    product.price = createProductDto.price;
    product.discountAmount = createProductDto.discountAmount || 0;
    product.discountType = createProductDto.discountType || 0;
    product.category = new Types.ObjectId (createProductDto.categoryId)
    product.brandId = new Types.ObjectId (createProductDto.brandId)
    product.stock = createProductDto.stock || 0;
    product.createdBy = user._id;
    product.updatedBy = user._id;
    product.sold = 0;
    product.colors = createProductDto.colors;
    product.size = createProductDto.size;

    return product;
  }

  updateProduct(updateProductDto: UpdateProductDto): Product {
    const product = new Product();

    if (updateProductDto.name) {
      product.name = updateProductDto.name;
      product.slug = slugify(updateProductDto.name, {
        replacement: '-',
        lower: true,
        trim: true
      });
    }

 
    return product;
  }
}
