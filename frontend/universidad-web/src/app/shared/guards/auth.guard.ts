import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Obtener instancias de los servicios usando 'inject'
  const authService = inject(AuthService);
  const router = inject(Router);

  // Obtener el rol del usuario
  const userRole = authService.getUserRole();
  
  // Roles permitidos para la ruta
  const allowedRoles = route.data['roles'] as string[];

  // Verificar si el rol del usuario esta en los roles permitidos
  if (userRole && allowedRoles.includes(userRole)) {
    return true;
  }

  // Si no tiene acceso, redirigir a la pagina de login
  router.navigate(['/auth/login']);
  return false;
};
