import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { Department } from '../models/Department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl =`${API_URL}/departamentos`

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }
  
  getDepartmentById(id: number): Observable<Department>{
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }
  
  addDepartment(department: Department): Observable<Department>{
    return this.http.post<Department>(this.apiUrl, department);
  }
  
  updateDepartment(id: number,department: Partial<Department>):Observable<Department>{
    return this.http.put<Department>(`${this.apiUrl}/${id}`, department);
  }
  
  deleteDepartment(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
