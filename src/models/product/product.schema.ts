


import { Prop, Schema, SchemaFactory, Virtual } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


 export enum DiscountType{
    fixed_Amount = 'fixed_Amount',
    percentage = 'percentage'
}


@Schema({ timestamps: true , toJSON:{virtuals:true} })
export class Product  {

    readonly _id:Types.ObjectId;
  @Prop({type:String , required: true, trim: true })
  name: string;

  @Prop({type:String , required: true, trim: true, unique: true })
  slug: string;

 
  @Prop({ required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: "Category", required: true })
  category: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Brand", required: true })
  brandId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  createdBy: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: "User", required: true })
  updatedBy:Types.ObjectId;

    @Prop({ type: Number, min:1, required: true })
  price:number;
    @Prop({ type: Types.ObjectId,  min:1  })
  discountAmount:number;
    @Prop({ type: String, enum:DiscountType, default:DiscountType.fixed_Amount })
  discountType:DiscountType;

@Virtual({
    get:function(){
    return this.price - this.discountAmount
    }
})

  finalPrice:number;

    @Prop({ type: Number , default:1, min:0 })
  stock:number;

  @Prop({ type: Number, required: true })
  sold:number;

   @Prop({ type: [String]})
  colors:string[];

    @Prop({ type: [String]})
  size:string[];



  
}

export const productSchema = SchemaFactory.createForClass(Product);
