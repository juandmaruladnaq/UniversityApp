import { 
  Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Request, ForbiddenException 
} from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface RequestWithUser extends Request {
  user?: { id: number; role: 'admin' | 'profesor' | 'estudiante' };
}

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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req: RequestWithUser, @Body() body: { nombre: string }) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede crear departamentos.');
    }
    return this.departamentoService.create(body.nombre);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Request() req: RequestWithUser, @Param('id') id: string, @Body() body: { nombre: string }) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede editar departamentos.');
    }
    return this.departamentoService.update(Number(id), body.nombre);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede eliminar departamentos.');
    }
    return this.departamentoService.delete(Number(id));
  }
}
