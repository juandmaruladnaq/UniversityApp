import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Controller('evaluaciones')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  @Get()
  findAll() {
    return this.evaluacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluacionService.findOne(Number(id));
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() body: CreateEvaluacionDto) {
    return this.evaluacionService.create(body.estudianteId, body.cursoId, body.nota, body.fecha);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateEvaluacionDto) {
    return this.evaluacionService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.evaluacionService.delete(Number(id));
  }
}
