import { Component } from '@angular/core';
import { Teacher } from '../../shared/models/Teacher.model';
import { CrudTemplateComponent } from '../../shared/components/crud-template/crud-template.component';
import { TeacherService } from '../../shared/services/teacher.service';
@Component({
  selector: 'app-teachers',
  imports: [CrudTemplateComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  teachers: Teacher[] = [];
  headersTable: string[] = ['id', 'nombre', 'email','role','departamentoId'];
  crud : boolean = false;
  constructor(private teacherService: TeacherService) {  }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
      this.teacherService
        .getAllTeachers()
        .subscribe((teachers) => (this.teachers = teachers));
    }
  
    createTeacher(entity:any): void {
      const teacher: Teacher = {
        nombre: entity.nombre,
        fechaContratacion: entity.fechaContratacion,
        departamentoId: entity.departamentoId,
      };
      this.teacherService
        .createTeacher(teacher)
        .subscribe(() => this.getTeachers());
    }
  
    deleteTeacher(teacherId: number): void {
  
      this.teacherService.deleteTeacher(teacherId).subscribe(() => {
        this.getTeachers();
      });
    }
  
    updateTeacher(teacher: Teacher): void {
      this.teacherService
       .updateTeacher(teacher.id!, teacher)
       .subscribe(() => this.getTeachers());
    }

}
