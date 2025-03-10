import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartamentoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.departamento.findMany({
      include: { profesores: true },
    });
  }

  async findOne(id: number) {
    const departamento = await this.prisma.departamento.findUnique({
      where: { id },
      include: { profesores: true },
    });

    if (!departamento) {
      throw new NotFoundException(`El departamento con ID ${id} no existe.`);
    }

    return departamento;
  }

  async create(nombre: string) {
    return await this.prisma.departamento.create({
      data: { nombre },
    });
  }

  async update(id: number, nombre: string) {
    const departamentoExistente = await this.prisma.departamento.findUnique({
      where: { id },
    });

    if (!departamentoExistente) {
      throw new NotFoundException(`El departamento con ID ${id} no existe.`);
    }

    return await this.prisma.departamento.update({
      where: { id },
      data: { nombre },
    });
  }

  async delete(id: number) {
    const departamentoExistente = await this.prisma.departamento.findUnique({
      where: { id },
    });

    if (!departamentoExistente) {
      throw new NotFoundException(`El departamento con ID ${id} no existe.`);
    }

    return await this.prisma.departamento.delete({
      where: { id },
    });
  }
}
