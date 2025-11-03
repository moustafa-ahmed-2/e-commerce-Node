import { Module, ValidationPipe } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserMongoModule } from '@shared/modules/user-mongo.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from '@common/filter/http-exception.filter';
import { AuthFactoryService } from './factory';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[
    UserMongoModule
   
  ],
  controllers: [AuthController],
  providers: [AuthService , AuthFactoryService , JwtService
    //  {provide:APP_PIPE , useClass:ValidationPipe} 
     ],
})
export class AuthModule {}

