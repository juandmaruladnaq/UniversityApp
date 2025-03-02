import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { PrismaModule } from '../prisma/prisma.module'; 
import { DepartamentoModule } from '../departamento/departamento.module'; 
import { ProfesorModule } from '../profesor/profesor.module'; 

@Module({
  imports: [PrismaModule, DepartamentoModule, ProfesorModule], 
  controllers: [CursoController],
  providers: [CursoService],
  exports: [CursoModule], 
})
export class CursoModule {}
