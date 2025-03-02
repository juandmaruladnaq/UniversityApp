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

  async create(nombre: string) {
    return this.prisma.departamento.create({
      data: { nombre },
    });
  }
}
