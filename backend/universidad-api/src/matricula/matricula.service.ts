import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MatriculaService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.matricula.findMany({
      include: { estudiante: true, curso: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.matricula.findUnique({
      where: { id },
      include: { estudiante: true, curso: true },
    });
  }

  async create(estudianteId: number, cursoId: number, fecha: string, calificacion?: number) {
    const curso = await this.prisma.curso.findUnique({
      where: { id: cursoId },
      include: { prerrequisitos: { select: { prerrequisitoId: true } } }, 
    });

    if (!curso) {
      throw new NotFoundException(`El curso con ID ${cursoId} no existe.`);
    }

    const prerrequisitosIds = curso.prerrequisitos.map(p => p.prerrequisitoId);

    if (prerrequisitosIds.length > 0) {
      const cursosAprobados = await this.prisma.matricula.findMany({
        where: {
          estudianteId,
          cursoId: { in: prerrequisitosIds },
          calificacion: { gte: 3.0 },
        },
        select: { cursoId: true },
      });

      const cursosAprobadosIds = cursosAprobados.map(m => m.cursoId);
      const faltantes = prerrequisitosIds.filter(p => !cursosAprobadosIds.includes(p));

      if (faltantes.length > 0) {
        throw new ForbiddenException(`No puedes inscribirte en este curso. Debes aprobar los prerrequisitos: ${faltantes.join(', ')}`);
      }
    }

    return this.prisma.matricula.create({
      data: {
        estudianteId,
        cursoId,
        fecha: new Date(fecha),
        calificacion,
      },
    });
  }

  async update(id: number, estudianteId: number, data: { fecha?: string; calificacion?: number }, usuarioRol: string) {
    const matricula = await this.prisma.matricula.findUnique({ where: { id } });

    if (!matricula) {
      throw new NotFoundException(`La matrícula con ID ${id} no existe.`);
    }

    if (usuarioRol !== 'admin' && matricula.estudianteId !== estudianteId) {
      throw new ForbiddenException('No tienes permisos para modificar esta matrícula.');
    }

    return this.prisma.matricula.update({
      where: { id },
      data: {
        ...data,
        fecha: data.fecha ? new Date(data.fecha) : undefined,
      },
    });
  }

  async delete(id: number) {
    const matricula = await this.prisma.matricula.findUnique({ where: { id } });

    if (!matricula) {
      throw new NotFoundException(`La matrícula con ID ${id} no existe.`);
    }

    return this.prisma.matricula.delete({ where: { id } });
  }
}
