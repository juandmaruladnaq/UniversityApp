import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email: string, password: string) {
    const user = await this.prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = { id: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      usuario: { id: user.id, nombre: user.nombre, email: user.email, role: user.role },
    };
  }
}
