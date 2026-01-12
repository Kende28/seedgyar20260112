import { Injectable } from '@nestjs/common';
import { CreateDolgozoDto } from './dto/create-dolgozo.dto';
import { UpdateDolgozoDto } from './dto/update-dolgozo.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DolgozoService {
  constructor (private readonly prisma: PrismaClient){}
  create(createDolgozoDto: CreateDolgozoDto) {
    return this.prisma;
  }

  findAll() {
    return `This action returns all dolgozo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dolgozo`;
  }

  update(id: number, updateDolgozoDto: UpdateDolgozoDto) {
    return `This action updates a #${id} dolgozo`;
  }

  remove(id: number) {
    return `This action removes a #${id} dolgozo`;
  }
}
