import { Component } from '@angular/core';
import { Course } from '../../shared/models/Course.model';
import { CourseService } from '../../shared/services/course.service';
import { CrudTemplateComponent } from '../../shared/components/crud-template/crud-template.component';

@Component({
  selector: 'app-courses',
  imports: [CrudTemplateComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses : Course[] =[];
  headersTable: string[] = ['id', 'nombre','descripcion','profesorId'];
  crud : boolean = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

getCourses(): void {
    this.courseService
      .getAllCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  createCourse(entity:any): void {
    const course: Course = {
      nombre: entity.nombre,
      descripcion: entity.descripcion,
      profesorId :entity.profesorId,
    };
    this.courseService
      .createCourse(course)
      .subscribe(() => this.getCourses());
  }

  deleteCourse(courseId: number): void {

    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.getCourses();
    });
  }

  updateCourse(course: Course): void {
    this.courseService
     .updateCourse(course.id!, course)
     .subscribe(() => this.getCourses());
  }
}
