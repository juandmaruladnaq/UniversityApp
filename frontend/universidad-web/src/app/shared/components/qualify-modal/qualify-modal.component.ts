import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qualify-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './qualify-modal.component.html',
  styleUrl: './qualify-modal.component.css'
})
export class QualifyModalComponent {
  private activeModal = inject(NgbActiveModal);
  private fb = inject(FormBuilder);
  private courseService = inject(CourseService);

  estudianteId!: number;
  cursoId!: number;

  calificacionForm = this.fb.group({
    calificacion: [null, [
      Validators.required,
      Validators.min(0),
      Validators.max(10)
    ]]
  });

  submitCalificacion() {
    if (this.calificacionForm.valid && this.calificacionForm.value.calificacion !== null) {
      const calificacion = Number(this.calificacionForm.value.calificacion);
      
      this.courseService.asignarNota(this.estudianteId, this.cursoId, calificacion)
        .subscribe({
          next: () => {
            alert('Calificación actualizada correctamente');
            this.activeModal.close('success');
          },
          error: (err) => {
            console.error('Error al calificar:', err);
            alert(err.error?.message || 'Error al actualizar la calificación');
          }
        });
    }
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}