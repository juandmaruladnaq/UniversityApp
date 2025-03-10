import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [PrismaModule, AuthModule], 
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}
