import { Module, forwardRef } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { PrismaModule } from '../prisma/prisma.module'; 
import { DepartamentoModule } from '../departamento/departamento.module'; 
import { UsuariosModule } from '../usuarios/usuarios.module'; 
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    PrismaModule, 
    DepartamentoModule, 
    UsuariosModule, 
    forwardRef(() => AuthModule), 
  ], 
  controllers: [CursoController],
  providers: [CursoService],
  exports: [CursoService], 
})
export class CursoModule {}
