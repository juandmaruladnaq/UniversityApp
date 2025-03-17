import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CourseService } from '../../shared/services/course.service';
import { ModalViewComponent } from '../../shared/components/modal-view/modal-view.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Course} from '../../shared/models/Course.model'



@Component({
  selector: 'app-enroll',
  imports: [NgbModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent implements OnInit {
  cursos: any[] = [];
  usuarioId: number | null = null;

  constructor( private authService: AuthService,
    private courseService :CourseService,private modalService: NgbModal
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

    this.courseService.registerCourse(this.usuarioId, cursoId).subscribe({
      next: () => {
        alert('Te has inscrito correctamente en el curso.');
      },
      error: (err) => {
        alert('Error: ' + err.error.message);
      }
    });
  }


    openViewModal(courseId:number) {
      const modalRef = this.modalService.open(ModalViewComponent, { centered: true, size: 'lg' });
      modalRef.componentInstance.titleName = "Info completa";
      this.courseService.getSchedulesByCourse(courseId).subscribe({
        next: (course: Course) => {
          console.log("course entrante: ", course);
          modalRef.componentInstance.entityData = course;
        },
        error: (err) => {
          console.error('Error al obtener el curso:', err);
        }
      });
    }
    
}