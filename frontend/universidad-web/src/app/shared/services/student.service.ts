import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { Student } from '../models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl =`${API_URL}/usuarios/estudiantes`

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }


  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }


  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  updateStudent(id: number,student: Partial<Student>):Observable<Student>{
    console.log("id: ",id);
    console.log("student: ", student);
    return this.http.put<Student>(`${this.apiUrl}/${id}`,student);
  }
  

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
