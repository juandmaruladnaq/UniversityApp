import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { CursoModule } from './curso/curso.module';
import { MatriculaModule } from './matricula/matricula.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [PrismaModule, DepartamentoModule, CursoModule, MatriculaModule, EvaluacionModule, UsuariosModule, AuthModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
