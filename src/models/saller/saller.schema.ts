



import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";



@Schema({timestamps:true , discriminatorKey: "role" , toJSON:{virtuals:true}})

export class Saller{

 readonly _id:Types.ObjectId ; 
userName:string ;
email:string ;
password:string;
@Prop({type:String , required:true})
whatsappLink:string



}

export const sallerSchema = SchemaFactory.createForClass(Saller)