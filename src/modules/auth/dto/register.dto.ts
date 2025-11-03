
import {  IsDate, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

import {Transform} from "class-transformer"

export class RegisterDTO {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
userName:string;

   @IsEmail()
   @IsNotEmpty()
email:string;




 @IsString()
  @IsNotEmpty()


password:string;


@Transform(({ value }) => new Date(value))
@IsDate()
dob: Date;


}
