import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-enroll',
  imports: [],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent implements OnInit {
  cursos: any[] = [];
  usuarioId: number | null = null;

  constructor(private userService: UserService, private authService: AuthService,
    private courseService :CourseService
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.usuarioId = user?.id || null;

    this.courseService.getAllCourses().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: (err) => {
        console.error('Error al obtener cursos:', err);
      }
    });
  }

  inscribirse(cursoId: number): void {
    if (!this.usuarioId) {
      alert('No se ha encontrado el ID del usuario.');
      return;
    }

    this.userService.registerCourse(this.usuarioId, cursoId).subscribe({
      next: () => {
        alert('Te has inscrito correctamente en el curso.');
      },
      error: (err) => {
        alert('Error: ' + err.error.message);
      }
    });
  }
}