import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Get()
  findAll() {
    return this.departamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentoService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: { nombre: string }) {
    return this.departamentoService.create(body.nombre);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { nombre: string }) {
    return this.departamentoService.update(Number(id), body.nombre);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.departamentoService.delete(Number(id));
  }
}
