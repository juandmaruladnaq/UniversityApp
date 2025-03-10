import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe, UseGuards, Request, ForbiddenException } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface RequestWithUser extends Request {
  user?: { id: number; role: 'admin' | 'profesor' | 'estudiante' };
}

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Request() req: RequestWithUser, @Body() body: CreateCursoDto) {
    if (req.user?.role !== 'profesor' && req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo los profesores o administradores pueden crear cursos.');
    }
    return this.cursoService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Request() req: RequestWithUser, @Param('id') id: string, @Body() body: UpdateCursoDto) {
    if (req.user?.role !== 'profesor' && req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo los profesores o administradores pueden actualizar cursos.');
    }
    return this.cursoService.update(Number(id), body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo los administradores pueden eliminar cursos.');
    }
    return this.cursoService.delete(Number(id));
  }
}
