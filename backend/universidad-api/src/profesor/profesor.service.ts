import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfesorService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.profesor.findMany({
      include: { cursos: true },
    });
  }
  

  async create(nombre: string, fechaContratacion: Date, departamentoId: number) {
    return this.prisma.profesor.create({
      data: { nombre, fechaContratacion, departamentoId },
    });
  }
}
