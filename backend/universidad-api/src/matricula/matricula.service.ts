import { Injectable } from '@nestjs/common';
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
    return this.prisma.matricula.create({
      data: { 
        estudianteId, 
        cursoId, 
        fecha: new Date(fecha), 
        calificacion 
      },
    });
  }


  async update(id: number, data: { fecha?: string; calificacion?: number }) {
    return this.prisma.matricula.update({
      where: { id },
      data: {
        ...data,
        fecha: data.fecha ? new Date(data.fecha) : undefined,
      },
    });
  }


  async delete(id: number) {
    return this.prisma.matricula.delete({
      where: { id },
    });
  }
}
