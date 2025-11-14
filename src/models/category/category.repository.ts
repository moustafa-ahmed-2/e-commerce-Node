import { AbstractRepository } from "@models/abstract.repository";
import { Injectable } from "@nestjs/common";
import { Category } from "./category.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable() // service  , repo , helper  , factory

export class CategoryRepository extends AbstractRepository<Category>{

constructor(
  @InjectModel(Category.name)
  private readonly categoryModel: Model<Category>,
) {
  super(categoryModel);
}



}



