import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';

@Controller('profesores')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() body: CreateProfesorDto) {
    return this.profesorService.create(body.nombre, new Date(body.fechaContratacion), body.departamentoId);
  }
}
