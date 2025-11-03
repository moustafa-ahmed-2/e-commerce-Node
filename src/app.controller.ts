import { Body, Controller, Get, HttpCode, Param, Post, Query, Req, Request, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Post('/login')
  @HttpCode(204)
login( @Body() body:any , @Param('id')  id:string  , @Query() query:any     ){
  
  console.log(body);
  console.log(id);
  
  
  
//  const accessToken =  this.appService.login();
//  return {message:"done successfully" , success:true , data:{accessToken}}
 
}

//  @Get('/register')
// register(){
//  const result =  this.appService.login();
//  return {message:"done successfully" , success:true , data:{result}}
// }

}
