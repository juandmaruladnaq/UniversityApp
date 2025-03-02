import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CursoService {
  constructor(private prisma: PrismaService) {}

 
  async findAll() {
    return this.prisma.curso.findMany({
      include: { profesor: true },
    });
  }


  async findOne(id: number) {
    return this.prisma.curso.findUnique({
      where: { id },
      include: { profesor: true },
    });
  }

 
  async create(nombre: string, descripcion: string, profesorId: number) {
    return this.prisma.curso.create({
      data: { nombre, descripcion, profesorId },
    });
  }


  async update(id: number, data: { nombre?: string; descripcion?: string; profesorId?: number }) {
    return this.prisma.curso.update({
      where: { id },
      data,
    });
  }


  async delete(id: number) {
    return this.prisma.curso.delete({
      where: { id },
    });
  }
}
