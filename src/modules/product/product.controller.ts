import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Auth } from '@common/decorators/auth.decorator';
import { ProductFactoryService } from './factory/product.factory';
import { User } from '@common/decorators/user.decorator';

@Controller('product')
@Auth(['Admin' , 'Saller'])
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly productFactoryService:ProductFactoryService
  
  
  ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto  ,@User() user:any  ) {

    const product =   this.productFactoryService.createProduct(createProductDto , user)
    const createdProduct =   await this.productService.create(product)
   return {
    success:true,
    message:"product created successfully",
    data:createdProduct

   }
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
