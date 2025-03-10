import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.curso.findMany({
      include: { profesor: true, prerrequisitos: { include: { prerrequisito: true } } },
    });
  }

  async findOne(id: number) {
    return this.prisma.curso.findUnique({
      where: { id },
      include: { profesor: true, prerrequisitos: { include: { prerrequisito: true } } },
    });
  }

  async create(data: CreateCursoDto) {
    const curso = await this.prisma.curso.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion ?? null,
        profesorId: data.profesorId,
      },
    });

    if (data.prerrequisitos && data.prerrequisitos.length > 0) {
      await this.prisma.cursoPrerequisito.createMany({
        data: data.prerrequisitos.map((prerrequisitoId) => ({
          cursoId: curso.id,
          prerrequisitoId,
        })),
      });
    }

    return curso;
  }

  async update(id: number, data: UpdateCursoDto) {
    const curso = await this.prisma.curso.update({
      where: { id },
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        profesorId: data.profesorId,
      },
    });

    if (data.prerrequisitos) {
      await this.prisma.cursoPrerequisito.deleteMany({ where: { cursoId: id } });
      await this.prisma.cursoPrerequisito.createMany({
        data: data.prerrequisitos.map((prerrequisitoId) => ({
          cursoId: id,
          prerrequisitoId,
        })),
      });
    }

    return curso;
  }

  async delete(id: number) {
    return this.prisma.curso.delete({ where: { id } });
  }
}
