

import { UserRepository } from '@models/common/user.repository';
import { Injectable, CanActivate, ExecutionContext, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userRepository: UserRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
 

    try {
        
     const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    if (!authorization) {
      throw new UnauthorizedException('No token provided');
    }

 
    const payload = this.jwtService.verify<{ _id: string; role: string; email: string }>(
      authorization,
      { secret: this.configService.get('JWT_SECRET') }, // غيّر المفتاح حسب اسم متغيرك في .env
    );

    const userExist = await this.userRepository.getOne({ _id: payload._id });

    if (!userExist) {
      throw new NotFoundException('User not found');
    }

    request.user = userExist;
    return true;

    } catch (error) {
      throw new UnauthorizedException(error.message)
    }


  }
}
