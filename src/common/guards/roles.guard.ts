


// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Observable } from 'rxjs';

// @Injectable()
// export class RolesGuard implements CanActivate {
//     constructor(private readonly roles:string[]){}
//   canActivate(
//     context: ExecutionContext,
//   ): boolean  {
//     const request = context.switchToHttp().getRequest();

//    if(this.roles.includes(request.user.role)) return true;
//  return false;

//     return true;
//   }
// }














import { Roles } from '@common/decorators/roles.decorator';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector:Reflector) {}

  canActivate(context: ExecutionContext): boolean {
  
   const request = context.switchToHttp().getRequest();
 const roles =  this.reflector.getAllAndMerge(Roles , [context.getHandler() , context.getClass()]);
 
 const publicVal =   this.reflector.get('PUBLIC' , 
    context.getHandler() 
 
)

  if(publicVal) return true;

  if(!roles.includes(request.user.role))  throw new UnauthorizedException("not allowed") 
  return false


   return true
}
}
