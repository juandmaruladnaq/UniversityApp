import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') 
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')  
  async register(@Body() body: { nombre: string; email: string; password: string; role: string }) {
    return this.authService.register(body.nombre, body.email, body.password, body.role); 
  }
}
