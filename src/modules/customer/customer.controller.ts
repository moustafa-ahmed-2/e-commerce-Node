import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthGuard } from '@common/guards/auth.guard';
import { RolesGuard } from '@common/guards/roles.guard';
import { Roles } from '@common/decorators/roles.decorator';
import { Public } from '@common/decorators/public.decorator';

@Controller('customer')
@UseGuards(AuthGuard)
@Roles(['Admin'])
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {  }


  @Get()
  // @UseGuards(AuthGuard , new RolesGuard(['user' , 'admin' , 'customer']))
  @UseGuards(RolesGuard)
  @Public()
  @Roles(['Customer'])
  getprofile(@Request() req:any){
   return {message : 'done' , success:true , data:{user:req.user}}
  }

 
}
