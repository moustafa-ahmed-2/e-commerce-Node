

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Saller } from './saller.schema';

@Injectable()
export class SallerRepository extends AbstractRepository<Saller> {
  constructor(
    @InjectModel(Saller.name)  sallerModel: Model<Saller>,
  ) {
    super(sallerModel);
  }
}
