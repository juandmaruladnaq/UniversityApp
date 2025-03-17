import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from '../constants/api-url';
import { Course } from '../models/Course.model';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl =`${API_URL}/cursos`


  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse( id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`,course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getSchedulesByCourse(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.apiUrl}/${id}/horarios`);
  }

  registerCourse(usuarioId: number, cursoId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscribir`, { usuarioId, cursoId });
  }

  getCursosByProfesor(profesorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profesor/${profesorId}`);
  }

  getEstudiantesByCurso(cursoId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cursoId}/estudiantes`);
  }

  asignarNota(estudianteId: number, cursoId: number, calificacion: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${cursoId}/matricula/${estudianteId}/nota`, { calificacion });
  }
}
