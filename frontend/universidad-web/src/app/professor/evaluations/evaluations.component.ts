import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../shared/services/course.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QualifyModalComponent } from '../../shared/components/qualify-modal/qualify-modal.component';

@Component({
  selector: 'app-evaluations',
  imports: [CommonModule],
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.css'
})
export class EvaluationsComponent {
  private courseService = inject(CourseService);
  private modalService = inject(NgbModal);

  profesorId: number | null = null;
  cursos: any[] = [];
  expandedCourseId: number | null = null;
  estudiantesPorCurso: { [key: number]: any[] } = {};

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user?.id) {
      this.profesorId = user.id;
      this.loadCourses();
    }
  }

  loadCourses(): void {
    this.courseService.getCursosByProfesor(this.profesorId!).subscribe({
      next: (cursos) => this.cursos = cursos,
      error: (err) => console.error('Error al obtener cursos:', err)
    });
  }

  toggleEstudiantes(cursoId: number): void {
    this.expandedCourseId = this.expandedCourseId === cursoId ? null : cursoId;
    
    if (this.expandedCourseId && !this.estudiantesPorCurso[cursoId]) {
      this.courseService.getEstudiantesByCurso(cursoId).subscribe({
        next: (data) => this.estudiantesPorCurso[cursoId] = data.estudiantes,
        error: (err) => console.error('Error al obtener estudiantes:', err)
      });
    }
  }

  openCalificarModal(estudianteId: number, cursoId: number): void {
    const modalRef = this.modalService.open(QualifyModalComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static'
    });

    modalRef.componentInstance.estudianteId = estudianteId;
    modalRef.componentInstance.cursoId = cursoId;

    modalRef.result.then(
      (result) => {
        if (result === 'success') {
          if (this.expandedCourseId) {
            this.courseService.getEstudiantesByCurso(cursoId).subscribe({
              next: (data) => this.estudiantesPorCurso[cursoId] = data.estudiantes
            });
          }
        }
      },
      () => {} 
    );
  }
}