import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartamentoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.departamento.findMany({
      include: { profesores: true },
    });
  }

  
  async findOne(id: number) {
    return this.prisma.departamento.findUnique({
      where: { id },
      include: { profesores: true },
    });
  }

  async create(nombre: string) {
    return this.prisma.departamento.create({
      data: { nombre },
    });
  }

  
  async update(id: number, nombre: string) {
    return this.prisma.departamento.update({
      where: { id },
      data: { nombre },
    });
  }

  async delete(id: number) {
    return this.prisma.departamento.delete({
      where: { id },
    });
  }
}
