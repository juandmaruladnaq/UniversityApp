import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Injectable()
export class ProfesorService {
  constructor(private prisma: PrismaService) {}
  
  async findAll() {
    return this.prisma.profesor.findMany({
      include: { cursos: true }, 
    });
  }

 
  async findOne(id: number) {
    return this.prisma.profesor.findUnique({
      where: { id },
      include: { cursos: true },
    });
  }

  async create(createProfesorDto: CreateProfesorDto) {
    return this.prisma.profesor.create({
      data: {
        ...createProfesorDto,
        fechaContratacion: new Date(createProfesorDto.fechaContratacion), // 👈 Conversión a Date
      },
    });
  }


  async update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return this.prisma.profesor.update({
      where: { id },
      data: {
        ...updateProfesorDto,
        fechaContratacion: updateProfesorDto.fechaContratacion 
          ? new Date(updateProfesorDto.fechaContratacion) 
          : undefined, 
      },
    });
  }

  async delete(id: number) {
    return this.prisma.profesor.delete({
      where: { id },
    });
  }
}
