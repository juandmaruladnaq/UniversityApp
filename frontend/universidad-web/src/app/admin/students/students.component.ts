import { Component } from '@angular/core';
import { Student } from '../../shared/models/Student.model';
import { StudentService } from '../../shared/services/student.service';
import { CrudTemplateComponent } from '../../shared/components/crud-template/crud-template.component';

@Component({
  selector: 'app-students',
  imports: [CrudTemplateComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [];
  headersTable: string[] = ['id', 'nombre', 'fechaNacimiento'];
  constructor(private studentService: StudentService) {} 

  ngOnInit(): void {
    this.getStudents();
    console.log(this.getStudents());

    
  }

  getStudents(): void {
    this.studentService
      .getStudents()
      .subscribe((students) => (this.students = students));
  }

  createStudent(entity:any): void {
    const student: Student = {
      nombre: entity.nombre,
      fechaNacimiento: entity.fechaNacimiento,
    };
    this.studentService
      .createStudent(student)
      .subscribe(() => this.getStudents());
  }

  deleteStudent(studentId: number): void {
    console.log('eliminando departamento con ID:', studentId);

    this.studentService.deleteStudent(studentId).subscribe(() => {
      this.getStudents();
    });
  }

  updateStudent(student: Student): void {
    console.log('Actualizando student:', student);
    this.studentService
     .updateStudent(student.id!, student)
     .subscribe(() => this.getStudents());
  }


}
