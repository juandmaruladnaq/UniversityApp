import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import {User} from '../../shared/models/User.model';


interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
}

interface Matricula {
  id: number;
  curso: Curso;
}
@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  cursos: Matricula[] = [];

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (user?.id) {
      this.userService.getCourseByUser(user.id).subscribe({
        next: (matriculas) => {
          this.cursos = matriculas; // ← Aquí se asignan las matrículas con los cursos incluidos
          console.log('Cursos obtenidos:', this.cursos); // Verificar la estructura en consola
        },
        error: (err) => {
          console.error('Error al obtener los cursos:', err);
        }
      });
    }
  }
}