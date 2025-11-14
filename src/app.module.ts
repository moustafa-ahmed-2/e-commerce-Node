




import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import devConfig from './config/env/dev.config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './models/common/user.schema';
import { Admin, adminSchema } from './models/admin/admin.schema';
import { Saller, sallerSchema } from './models/saller/saller.schema';
import { CustomerModule } from './modules/customer/customer.module';
import { CommonModule } from '@modules/brand/common.module';

@Module({
  imports: [
    CommonModule ,
    AuthModule,
    ProductModule,
    BrandModule,
    CategoryModule,

  
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          if (!userSchema.discriminators?.Admin) {
            userSchema.discriminator(Admin.name, adminSchema);
          }
          if (!userSchema.discriminators?.Saller) {
            userSchema.discriminator(Saller.name, sallerSchema);
          }
          return userSchema;
        },
      },
    ]),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('db').url,
      }),
    }),

    ConfigModule.forRoot({
      load: [devConfig],
      isGlobal: true,
    }),

    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
