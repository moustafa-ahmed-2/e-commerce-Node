import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const User = createParamDecorator(
    (data:string , context:ExecutionContext)=>{
    

   const request =   context.switchToHttp().getRequest()
   return data ? request.body[data] : request.user ;
})





