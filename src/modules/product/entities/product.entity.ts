import { DiscountType } from "@models/product/product.schema";
import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";



export class Product {





    readonly _id:Types.ObjectId;
 
  name: string;


  slug: string;

 

  description: string;

 
  category: Types.ObjectId;

  
  brandId: Types.ObjectId;

  
  createdBy: Types.ObjectId;

 
  updatedBy:Types.ObjectId;

    
  price:number;
   
  discountAmount:number;
   
  discountType:DiscountType;


  finalPrice:number;

   
  stock:number;

  
  sold:number;

   
  colors:string[];

    
  size:string[];


  
}









