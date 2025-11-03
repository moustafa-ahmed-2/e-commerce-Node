




import { SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// export const Roles = Reflector.createDecorator<string[]>();

export const Roles = (value:string[])=> SetMetadata("roles" , value)




/**
 * 
 * @Roles('admin' , 'customer'  ,  )
 * 
 * 
 * 
 */