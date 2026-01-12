import { Injectable } from '@nestjs/common';
import { CreateDolgozoDto } from './dto/create-dolgozo.dto';
import { UpdateDolgozoDto } from './dto/update-dolgozo.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DolgozoService {
  constructor (private prisma: PrismaClient){}
  
  create(createDolgozoDto: CreateDolgozoDto) {
    return this.prisma.dolgozok.create({data: createDolgozoDto});
  }

  findAll() {
    return this.prisma.dolgozo.finMany();
  }

  findOne(id: number) {
    return this.prisma.dolgozok.findUnique({where: {id}});
  }

  update(id: number, updateDolgozoDto: UpdateDolgozoDto) {
    return this.prisma.dolgozok.update({where: {id}, data: updateDolgozoDto});
  }

  remove(id: number) {
    return this.prisma.dolgozok.delete({where: {id}});
  }
}
