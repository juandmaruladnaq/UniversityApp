import { Component } from '@angular/core';
import { Department } from '../../shared/models/Department.model';
import { DepartmentService } from '../../shared/services/department.service';

@Component({
  selector: 'app-department',
  standalone : true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  departments:Department[] = [];
  constructor(private departmentService: DepartmentService) {  }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

}
