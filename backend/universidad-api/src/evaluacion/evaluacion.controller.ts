import { 
  Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe, 
  UseGuards, Request, ForbiddenException, NotFoundException 
} from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface RequestWithUser extends Request {
  user?: { id: number; role: 'admin' | 'profesor' | 'estudiante' };
}

@Controller('evaluaciones')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: RequestWithUser) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo los administradores pueden ver todas las evaluaciones.');
    }
    return await this.evaluacionService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    const evaluacion = await this.evaluacionService.findOne(Number(id));

    if (!evaluacion) {
      throw new NotFoundException('Evaluación no encontrada.');
    }

    if (req.user?.role === 'estudiante' && req.user?.id !== evaluacion.estudianteId) {
      throw new ForbiddenException('No puedes ver esta evaluación.');
    }

    return evaluacion;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Request() req: RequestWithUser, @Body() body: CreateEvaluacionDto) {
    if (req.user?.role !== 'profesor' && req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo los profesores o administradores pueden crear evaluaciones.');
    }

    return await this.evaluacionService.create(body.estudianteId, body.cursoId, body.nota, body.fecha);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Request() req: RequestWithUser, @Param('id') id: string, @Body() body: UpdateEvaluacionDto) {
    const evaluacion = await this.evaluacionService.findOne(Number(id));

    if (!evaluacion) {
      throw new NotFoundException('Evaluación no encontrada.');
    }

    if (req.user?.role !== 'profesor' && req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo los profesores o administradores pueden actualizar evaluaciones.');
    }

    return await this.evaluacionService.update(Number(id), body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo los administradores pueden eliminar evaluaciones.');
    }

    return await this.evaluacionService.delete(Number(id));
  }
}
