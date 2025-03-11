import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { Teacher } from '../models/Teacher.model';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl =`${API_URL}/usuarios/profesores`

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiUrl}/${id}`);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, teacher);
  }



  updateTeacher(id: number,teacher: Partial<Teacher>):Observable<Teacher>{
    return this.http.put<Teacher>(`${this.apiUrl}/${id}`,teacher);
  }
  
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}
