import { Component } from '@angular/core';
import { Department } from '../../shared/models/Department.model';
import { DepartmentService } from '../../shared/services/department.service';
import { CrudTemplateComponent } from '../../shared/components/crud-template/crud-template.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CrudTemplateComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  departments: Department[] = [];
  headersTable: string[] = ['id', 'nombre'];
  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService
      .getDepartments()
      .subscribe((departments) => (this.departments = departments));
  }

  createDepartment(entity: any): void {
    const department: Department = {
      nombre: entity.nombre,
    };
    console.log('Enviando Department al servicio:', department);
    this.departmentService
      .addDepartment(department)
      .subscribe(() => this.getDepartments());
  }

  deleteDepartment(departmentId: number): void {
    console.log('eliminando departamento con ID:', departmentId);

    this.departmentService.deleteDepartment(departmentId).subscribe(() => {
      this.getDepartments();
    });
  }

  updateDepartment(department: Department): void {
    console.log('Actualizando departamento:', department);
    this.departmentService
     .updateDepartment(department.id!, department)
     .subscribe(() => this.getDepartments());

  }
}
