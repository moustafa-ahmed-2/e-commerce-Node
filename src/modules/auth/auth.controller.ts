import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, NotFoundException, UseFilters, ParseIntPipe, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';


import { HttpExceptionFilter } from '@common/filter/http-exception.filter';
import { ValidationPipe } from '@common/pipes/validation.pipe';
import { ZodValidationPipe } from '@common/pipes/zod-validation.pipe';
import { RegisterSchema } from './validation/schema';
import { RegisterDTO } from './dto/register.dto';
import { AuthFactoryService } from './factory';
import { LoginDTO } from './dto/login.dto';
import { success } from 'zod';

@Controller('auth')
  // @UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private readonly authService: AuthService ,

private readonly authFactoryService:AuthFactoryService


  ) {
    
  }

  @Post("/register")

 @UsePipes(new ValidationPipe())

  // @UsePipes(new ZodValidationPipe(RegisterSchema))
  // @UsePipes(ValidationPipe)

  async register(@Body() registerDTO: RegisterDTO  ) {
    // console.log(" Incoming body:", registerDTO);
     
    // return this.authService.register(registerDTO);

  const customer =  await this.authFactoryService.createCustomer(registerDTO)
  const createdCustomer =  await this.authService.register(customer)

    return {message:"customer register successfully" , success:true , data:createdCustomer}
  }


 @Post('/login')

async login( @Body() loginDTO:LoginDTO){

 const token =  await  this.authService.login(loginDTO)

  return {message:"login successfully" , success:true , data:{token}}

}




}

