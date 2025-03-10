import { 
  Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe, UseGuards, Request, ForbiddenException 
} from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface RequestWithUser extends Request {
  user?: { id: number; role: 'admin' | 'profesor' | 'estudiante' };
}

@Controller('matriculas')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: RequestWithUser) {
    if (!req.user || req.user.role !== 'admin') {
      throw new ForbiddenException('Solo los administradores pueden ver todas las matrículas.');
    }
    return this.matriculaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    const matricula = await this.matriculaService.findOne(Number(id));

    if (!matricula) {
      throw new ForbiddenException('Matrícula no encontrada.');
    }

    if (!req.user || (req.user.role !== 'admin' && req.user.id !== matricula.estudianteId)) {
      throw new ForbiddenException('No puedes ver esta matrícula.');
    }

    return matricula;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Request() req: RequestWithUser, @Body() body: CreateMatriculaDto) {
    if (!req.user || req.user.role !== 'estudiante') {
      throw new ForbiddenException('Solo los estudiantes pueden inscribirse en cursos.');
    }

    return this.matriculaService.create(req.user.id, body.cursoId, body.fecha, body.calificacion);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Request() req: RequestWithUser, @Param('id') id: string, @Body() body: UpdateMatriculaDto) {
    if (!req.user) {
      throw new ForbiddenException('No hay usuario autenticado.');
    }

    return this.matriculaService.update(Number(id), req.user.id, body, req.user.role);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (!req.user || req.user.role !== 'admin') {
      throw new ForbiddenException('Solo los administradores pueden eliminar matrículas.');
    }
    return this.matriculaService.delete(Number(id)); 
  }
}