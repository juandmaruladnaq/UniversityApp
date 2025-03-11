import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from '../app/shared/components/navbar/navbar.component';
import { AuthService } from '../app/shared/services/auth.service';



@Component({
  selector: 'app-root',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userRole: string | null = null;
  navbarLinks: { title: string, path: string }[] = [];

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe(user => {
      this.userRole = user?.role || null;
      this.setNavbarLinks();
    });
  }

  setNavbarLinks() {
    if (this.userRole === 'admin') {
      this.navbarLinks = [
        { title: 'Cursos', path: '/admin/courses' },
        { title: 'Profesores', path: '/admin/teachers' },
        { title: 'Estudiantes', path: '/admin/students' },
        { title: 'Departamentos', path: '/admin/departments' },
        {title: 'Users', path:'/admin/users' },
        { title: 'Perfil', path: '/profile' }
      ];
    } else if (this.userRole === 'profesor') {
      this.navbarLinks = [
        { title: 'Mis Cursos', path: '/professor/my-courses' },
        { title: 'Evaluaciones', path: '/professor/evaluations' },
        { title: 'Perfil', path: '/profile' }
      ];
    } else if (this.userRole === 'estudiante') {
      this.navbarLinks = [
        { title: 'Mis Cursos', path: '/student/courses' },
        { title: 'Inscribirme', path: '/student/enroll' },
        { title: 'Perfil', path: '/profile' }
      ];
    } else {
      this.navbarLinks = [
        { title: 'Iniciar Sesión', path: '/auth/login' },
        { title: 'Registrarse', path: '/auth/register' }
      ];
    }
  }
}