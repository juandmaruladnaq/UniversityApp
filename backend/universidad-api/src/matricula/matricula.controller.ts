import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';

@Controller('matriculas')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Get()
  findAll() {
    return this.matriculaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matriculaService.findOne(Number(id));
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() body: CreateMatriculaDto) {
    return this.matriculaService.create(body.estudianteId, body.cursoId, body.fecha, body.calificacion);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateMatriculaDto) {
    return this.matriculaService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.matriculaService.delete(Number(id));
  }
}
