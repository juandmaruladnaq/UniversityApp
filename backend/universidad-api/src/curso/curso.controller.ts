import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';


@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(Number(id));
  }

  @Post()
@UsePipes(new ValidationPipe({ whitelist: true }))
create(@Body() body: CreateCursoDto) {
  return this.cursoService.create(body.nombre, body.descripcion ?? null, body.profesorId); // 👈 Ahora usa `null` en lugar de `"Null"`
}

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateCursoDto) {
    return this.cursoService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cursoService.delete(Number(id));
  }
}
