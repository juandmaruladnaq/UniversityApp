import { 
    Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Request, ForbiddenException, BadRequestException, UsePipes, ValidationPipe
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

interface RequestWithUser extends Request {
  user?: { id: number; role: 'admin' | 'profesor' | 'estudiante' };
}

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Request() req: RequestWithUser, @Body() body: CreateUsuarioDto) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede crear usuarios.');
    }
    return this.usuariosService.create(body.nombre, body.email, body.password, body.role);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Request() req: RequestWithUser, @Param('id') id: string, @Body() body: UpdateUsuarioDto) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede actualizar usuarios.');
    }
    return this.usuariosService.update(Number(id), body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: RequestWithUser) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede ver todos los usuarios.');
    }
    return this.usuariosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('estudiantes')
  findEstudiantes(@Request() req: RequestWithUser) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede ver los estudiantes.');
    }
    return this.usuariosService.findByRole('estudiante');
  }

  @UseGuards(JwtAuthGuard)
  @Get('profesores')
  findProfesores(@Request() req: RequestWithUser) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede ver los profesores.');
    }
    return this.usuariosService.findByRole('profesor');
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user?.role !== 'admin' && req.user?.id !== Number(id)) {
      throw new ForbiddenException('No puedes ver la información de otro usuario.');
    }
    return this.usuariosService.findOne(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Request() req: RequestWithUser, @Param('id') id: string) {
    if (req.user?.role !== 'admin') {
      throw new ForbiddenException('Solo el admin puede eliminar usuarios.');
    }
    return this.usuariosService.delete(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/cursos')
  async getCursosDelEstudiante(@Param('id') id: string) {
    return this.usuariosService.getCursosDelEstudiante(parseInt(id));
  }

  @UseGuards(JwtAuthGuard)
  @Post('inscribir')
  async registerCourse(@Body() body: { usuarioId: number; cursoId: number }) {
    return this.usuariosService.registerCourse(body.usuarioId, body.cursoId);
  }
}

  