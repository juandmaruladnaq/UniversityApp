import { Module, forwardRef } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module'; 
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    forwardRef(() => AuthModule), 
    JwtModule,
  ],
  providers: [UsuariosService, PrismaService],
  controllers: [UsuariosController],
  exports: [UsuariosService],
})
export class UsuariosModule {}
