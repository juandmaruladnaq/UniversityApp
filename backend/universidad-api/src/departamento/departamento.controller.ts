import { Controller, Get, Post, Body } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Get()
  findAll() {
    return this.departamentoService.findAll();
  }

  @Post()
  create(@Body() body: { nombre: string }) {
    return this.departamentoService.create(body.nombre);
  }
}
