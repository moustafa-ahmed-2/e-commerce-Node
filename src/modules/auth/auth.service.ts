import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';


import { CustomerRepository } from '@models/customer/customer.repository';
import { RegisterDTO } from './dto/register.dto';
import { Customer } from './entities/auth.entity';
import { sendMail } from '@models/common/helpers/send-email.helper';
import { LoginDTO } from './dto/login.dto';
import * as bcrypt from "bcrypt"
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { generateOTP } from '@models/common/helpers/otp.helper';
import { UserRepository } from '@models/common/user.repository';

@Injectable()

export class AuthService {
  constructor( 
    private readonly configService:ConfigService,
    private readonly customerRepository: CustomerRepository,
    private readonly jwtService:JwtService ,
    private readonly userRepository:UserRepository
  
  
  ) { }
    
   async register(customer:Customer){
   
   const  customerExist =  await  this.customerRepository.getOne({email:customer.email } , {} , {})
    
   if(customerExist) throw new ConflictException('user already exist')
   const createdCustomer = await this.customerRepository.create(customer)

   // send Email

   await sendMail({to:customer.email , subject:"confirm email"  ,html:`<h1> your otp is ${customer.otp}   </h1> `})
   const {password , otp , otpExpiry , ...customerObj}= JSON.parse(JSON.stringify(createdCustomer))
   
   return customerObj as Customer ;

  }


 async login(loginDTO:LoginDTO){
  const customerExist =  await  this.userRepository.getOne({email:loginDTO.email})
  const match  = await bcrypt.compare(loginDTO.password , customerExist?.password || '') 
  
  if(!customerExist) throw new UnauthorizedException('invalid credentials')

  if(!match) throw new UnauthorizedException("invalid credentials")


  const token = this.jwtService.sign(
      {
        _id:customerExist._id ,
         role:"Customer",
          email:customerExist.email 
        
        } , {
          secret:this.configService.get("access").jwt_secret , expiresIn:"1d"
        })
return token;

  }





async forgotPassword(email: string) {
    const user = await this.customerRepository.getOne({ email }, {}, {});
    if (!user) throw new BadRequestException('User not found');

    const otp = generateOTP();
    const expiry = Date.now() + 5 * 60 * 1000; 

    user.otp = otp;
    user.otpExpiry = String(expiry);
    await user.save();

    
    console.log(` OTP for ${email}:`, otp);

    return { message: 'OTP sent to your email', success: true };
  }
}












