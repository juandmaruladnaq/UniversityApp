import { Component } from '@angular/core';
import { CourseService } from '../../shared/services/course.service';



@Component({
  selector: 'app-my-courses',
  imports: [],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {

  cursos: any[] = [];
  profesorId: number | null = null;


  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user?.id) {
      this.profesorId = user.id;
      this.loadCourses();
    }
  }

  loadCourses(): void {
    this.courseService.getCursosByProfesor(this.profesorId!).subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: (err) => {
        console.error('Error al obtener los cursos del profesor:', err);
      }
    });
  }
}