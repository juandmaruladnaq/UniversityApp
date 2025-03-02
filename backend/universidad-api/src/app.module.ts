import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ProfesorModule } from './profesor/profesor.module';
import { CursoModule } from './curso/curso.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MatriculaModule } from './matricula/matricula.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';

@Module({
  imports: [PrismaModule, DepartamentoModule, ProfesorModule, CursoModule, EstudianteModule, MatriculaModule, EvaluacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
