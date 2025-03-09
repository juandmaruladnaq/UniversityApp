import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {

    console.log('📢 EstudianteService ha sido instanciado correctamente.');
  }
  
  async findAll() {
    return this.prisma.estudiante.findMany({
      include: { Matricula: true }, 
    });
  }
  
  async findOne(id: number) {
    return this.prisma.estudiante.findUnique({
      where: { id },
      include: { Matricula: true }, 
    });
  }
  

  async create(nombre: string, fechaNacimiento: Date) {
    return this.prisma.estudiante.create({
      data: { nombre, fechaNacimiento },
    });
  }

  async update(id: number, data: { nombre?: string; fechaNacimiento?: string; Matricula?: any[] }) {
    return this.prisma.estudiante.update({
      where: { id },
      data: {
        ...data,
        fechaNacimiento: data.fechaNacimiento ? new Date(data.fechaNacimiento) : undefined,
  
        Matricula: data.Matricula
          ? {
              upsert: data.Matricula.map((matricula) => ({
                where: { id: matricula.id }, // Busca por ID existente
                update: { ...matricula }, // Actualiza si ya existe
                create: { ...matricula }, // Crea si no existe
              })),
            }
          : undefined,
      },
    });
  }
  

  async delete(id: number) {
    return this.prisma.estudiante.delete({
      where: { id },
    });
  }
}
