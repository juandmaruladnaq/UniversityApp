import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(nombre: string, email: string, password: string, role: 'admin' | 'profesor' | 'estudiante') {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.usuario.create({
      data: { nombre, email, password: hashedPassword, role },
    });
  }

  async update(id: number, data: { nombre?: string; email?: string; password?: string; role?: 'admin' | 'profesor' | 'estudiante' }) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  async findByRole(role: 'profesor' | 'estudiante') {
    return this.prisma.usuario.findMany({ where: { role } });
  }

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }
    return user;
  }

  async delete(id: number) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }
    return this.prisma.usuario.delete({ where: { id } });
  }
}
