import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EvaluacionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.evaluacion.findMany({
      include: { estudiante: true, curso: true }, 
    });
  }
  
  async findOne(id: number) {
    return this.prisma.evaluacion.findUnique({
      where: { id },
      include: { estudiante: true, curso: true },
    });
  }
  

  async create(estudianteId: number, cursoId: number, nota: number, fecha: string) {
    return this.prisma.evaluacion.create({
      data: { 
        estudianteId, 
        cursoId, 
        nota,
        fecha: new Date(fecha), 
      },
    });
  }

  async update(id: number, data: { nota?: number; fecha?: string }) {
    return this.prisma.evaluacion.update({
      where: { id },
      data: {
        ...data,
        fecha: data.fecha ? new Date(data.fecha) : undefined,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.evaluacion.delete({
      where: { id },
    });
  }
}
