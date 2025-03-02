import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {

    console.log('📢 EstudianteService ha sido instanciado correctamente.');
  }
  
  async findAll() {
    return this.prisma.estudiante.findMany({
      include: { matriculas: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.estudiante.findUnique({
      where: { id },
      include: { matriculas: true },
    });
  }

  async create(nombre: string, fechaNacimiento: Date) {
    return this.prisma.estudiante.create({
      data: { nombre, fechaNacimiento },
    });
  }

  async update(id: number, data: { nombre?: string; fechaNacimiento?: string }) {
    return this.prisma.estudiante.update({
      where: { id },
      data: {
        ...data,
        fechaNacimiento: data.fechaNacimiento ? new Date(data.fechaNacimiento) : undefined, // ✅ Conversión aquí
      },
    });
  }
  

  async delete(id: number) {
    return this.prisma.estudiante.delete({
      where: { id },
    });
  }
}
