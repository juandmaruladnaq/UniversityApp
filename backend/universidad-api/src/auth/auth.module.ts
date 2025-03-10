import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module'; 
import { JwtAuthGuard } from './jwt-auth.guard'; 

@Module({
  imports: [
    forwardRef(() => UsuariosModule),
    PrismaModule, 
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secreto-super-seguro',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard ],
  exports: [AuthService, JwtModule, JwtAuthGuard],
})
export class AuthModule {}
