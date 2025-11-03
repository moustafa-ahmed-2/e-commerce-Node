import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminRepository } from "src/models/admin/admin.repository";
import { Admin, adminSchema } from "src/models/admin/admin.schema";
import { User, userSchema } from "src/models/common/user.schema";
import { CustomerRepository } from "src/models/customer/customer.repository";
import { Customer, customerSchema } from "src/models/customer/customer.schema";
import { SallerRepository } from "src/models/saller/saller.repository";
import { Saller, sallerSchema } from "src/models/saller/saller.schema";


@Module({  
    
    imports:[
        MongooseModule.forFeature([
           { name:User.name , schema:userSchema ,
            discriminators:[
                {name:Admin.name  ,schema:adminSchema} , 
                {name:Customer.name  ,schema:customerSchema} , 
                {name:Saller.name  ,schema:sallerSchema} , 
               
            ]
           }
        ])
    ] ,
    controllers:[] ,
    providers:[SallerRepository , AdminRepository ,CustomerRepository ] ,
    exports:[SallerRepository , AdminRepository ,CustomerRepository]
})
export class UserMongoModule{



}

