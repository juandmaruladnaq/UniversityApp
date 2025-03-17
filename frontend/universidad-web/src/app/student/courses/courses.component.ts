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
  userId: number | null = null;


  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user?.id) {
      this.userId = user.id;
      this.loadCourses();
    }
  }

  loadCourses(): void {
    if (!this.userId) return;

    this.userService.getCourseByUser(this.userId).subscribe({
      next: (matriculas) => {
        this.cursos = matriculas;
        console.log('Cursos obtenidos:', this.cursos);
      },
      error: (err) => {
        console.error('Error al obtener los cursos:', err);
      }
    });
  }

  removeEnrollment(courseId: number): void {
    if (!this.userId) return;

    this.userService.deleteEnroll(courseId, this.userId).subscribe({
      next: () => {
        console.log(`Matricula en curso ${courseId} eliminada.`);
        this.cursos = this.cursos.filter(matricula => matricula.curso.id !== courseId);
      },
      error: (err) => {
        console.error('Error al eliminar la matricula:', err);
      }
    });
  }
}