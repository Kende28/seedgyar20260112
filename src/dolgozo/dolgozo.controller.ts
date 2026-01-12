import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DolgozoService } from './dolgozo.service';
import { CreateDolgozoDto } from './dto/create-dolgozo.dto';
import { UpdateDolgozoDto } from './dto/update-dolgozo.dto';

@Controller('dolgozo')
export class DolgozoController {
  constructor(private readonly dolgozoService: DolgozoService) {}

  @Post()
  create(@Body() createDolgozoDto: CreateDolgozoDto) {
    return this.dolgozoService.create(createDolgozoDto);
  }

  @Get()
  findAll() {
    return this.dolgozoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dolgozoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDolgozoDto: UpdateDolgozoDto) {
    return this.dolgozoService.update(+id, updateDolgozoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dolgozoService.remove(+id);
  }
}
