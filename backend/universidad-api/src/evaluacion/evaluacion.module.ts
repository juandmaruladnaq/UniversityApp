import { Module } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { PrismaModule } from '../prisma/prisma.module'; 
import { DepartamentoModule } from '../departamento/departamento.module';
import { ProfesorModule } from '../profesor/profesor.module';
import { CursoModule } from '../curso/curso.module';
import { EstudianteModule } from '../estudiante/estudiante.module';
import { MatriculaModule } from '../matricula/matricula.module';

@Module({
  imports: [PrismaModule, DepartamentoModule, ProfesorModule, CursoModule, EstudianteModule, MatriculaModule],
  controllers: [EvaluacionController],
  providers: [EvaluacionService],
  exports: [EvaluacionService], 
})
export class EvaluacionModule {}
