import { Module, forwardRef } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DepartamentoModule } from '../departamento/departamento.module';
import { CursoModule } from '../curso/curso.module';
import { MatriculaModule } from '../matricula/matricula.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    
    DepartamentoModule,
    CursoModule,
    MatriculaModule,
    UsuariosModule,
    forwardRef(() => AuthModule), 
  ],
  controllers: [EvaluacionController],
  providers: [EvaluacionService],
  exports: [EvaluacionService],
})
export class EvaluacionModule {}
